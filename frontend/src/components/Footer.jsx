import { Info } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-6 flex gap-3 items-start text-sm text-slate-600">
        <Info size={18} className="text-teal-600 shrink-0 mt-0.5" />
        <p>
          <span className="font-semibold text-slate-800">{t("footer.title")}</span>
          {t("footer.text")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;