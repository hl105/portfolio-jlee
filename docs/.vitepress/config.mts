import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Johanna's Portfolio",
  description: "6.1040 Fall 2024",
  // TODO: add your base here; this should be your repo name!
  base: "/portfolio-jlee/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "About Me", link: "/about"}
    ],

    // sidebar: [
    //   {
    //     text: "Blogs",
    //     link: "/blogs",
    //   },
    // ],

    socialLinks: [
      { icon: "github", link: "https://github.com/hl105"},
      { icon: "linkedin", link: "linkedin.com/in/johanna-lee-367221250/"},
      { icon: ""}]

  },
});
