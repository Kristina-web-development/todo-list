export const themes = {
    dark: "dark",
    light: "light",
};

export const getTheme = () => {
    const theme = `${window?.localStorage?.getItem("weather-theme")}`;

    if (Object.values(themes).includes(theme)) return theme; //undefind/stinrg of dark or light

    const userMedia = window.matchMedia("(prefers-color-scheme: light)");
    if (userMedia.matches) return themes.light; //return "light"

    return themes.dark; //  return "dark"
};