import { h, onBeforeUnmount, onMounted, ref } from "vue";
import { useData } from "vitepress";
import DefaultTheme from "vitepress/theme";
import "./style.css";

const ThemeToggle = {
  setup() {
    const { isDark } = useData();

    return () =>
      h(
        "button",
        {
          type: "button",
          class: "dp-theme-toggle",
          "aria-label": isDark.value ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
          "aria-pressed": String(isDark.value),
          onClick: () => {
            isDark.value = !isDark.value;
          }
        },
        [h("span", { class: "dp-theme-toggle-icon", "aria-hidden": "true" }, isDark.value ? "☀" : "☾"), h("span", { class: "dp-theme-toggle-text" }, isDark.value ? "Claro" : "Oscuro")]
      );
  }
};

const BackToTop = {
  setup() {
    const visible = ref(false);

    const onScroll = () => {
      visible.value = window.scrollY > 520;
    };

    const scrollTop = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    onMounted(() => {
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    });

    onBeforeUnmount(() => {
      window.removeEventListener("scroll", onScroll);
    });

    return () =>
      h(
        "button",
        {
          type: "button",
          class: ["dp-back-to-top", visible.value && "is-visible"],
          "aria-label": "Ir al top",
          onClick: scrollTop
        },
        "Ir al top"
      );
  }
};

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-after": () => h(ThemeToggle),
      "layout-bottom": () => h(BackToTop)
    });
  }
};
