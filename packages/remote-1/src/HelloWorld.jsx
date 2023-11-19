import i18n from "./i18next";

export default function HelloWorld() {
    return (
        <div>{i18n.t("helloWorld")}</div>
    )
}