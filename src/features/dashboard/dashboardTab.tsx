import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../shared/components/language-switcher";

const DashboardTab = () => {
  const { t } = useTranslation();
  return (
    <div>
      {" "}
      {t("welcome")}
      <LanguageSwitcher />{" "}
    </div>
  );
};

export default DashboardTab;
