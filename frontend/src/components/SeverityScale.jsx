import { useLanguage } from "../i18n/LanguageContext";
import RetinaIllustration from "./RetinaIllustration";
import { SEVERITY_STYLES } from "./severityStyles";

function SeverityScale({ detailed = false }) {
  const { t } = useLanguage();

  return (
    <div>
      {/* Low to high risk bar */}
      <div className="flex items-center gap-3 text-xs font-medium text-slate-600">
        <span>{t("sev.low")}</span>
        <div className="flex-1 h-2 rounded-full bg-gradient-to-r from-green-500 via-amber-400 to-red-600"></div>
        <span>{t("sev.high")}</span>
      </div>

      <div
        className={
          detailed
            ? "mt-6 space-y-4"
            : "mt-6 grid sm:grid-cols-2 lg:grid-cols-5 gap-4"
        }
      >
        {SEVERITY_STYLES.map((s, n) =>
          detailed ? (
            <div
              key={n}
              className={`bg-white rounded-xl border-2 ${s.border} p-5 flex flex-col sm:flex-row gap-5 items-center`}
            >
              <RetinaIllustration severity={n} className="h-28 w-28 shrink-0" />
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${s.badge}`}>
                    {t("sev.level")} {n}
                  </span>
                  <h3 className="font-bold text-slate-900">{t(`sev.${n}.name`)}</h3>
                </div>
                <p className="mt-2 text-slate-700">{t(`sev.${n}.short`)}</p>
                <p className="mt-2 text-sm text-slate-600">
                  <span className="font-semibold">{t("sev.signs")}: </span>
                  {t(`sev.${n}.signs`)}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  <span className="font-semibold">{t("sev.action")}: </span>
                  {t(`sev.${n}.action`)}
                </p>
              </div>
            </div>
          ) : (
            <div
              key={n}
              className={`bg-white rounded-xl border-2 ${s.border} p-4 text-center`}
            >
              <RetinaIllustration severity={n} className="h-24 w-24 mx-auto" />
              <span
                className={`mt-3 inline-block text-xs font-bold px-2.5 py-1 rounded-full ${s.badge}`}
              >
                {t("sev.level")} {n}
              </span>
              <h3 className="mt-2 font-semibold text-slate-900 text-sm">
                {t(`sev.${n}.name`)}
              </h3>
              <p className="mt-1 text-xs text-slate-600">{t(`sev.${n}.short`)}</p>
            </div>
          )
        )}
      </div>

      {detailed && (
        <p className="mt-4 text-xs text-slate-500">{t("sev.note")}</p>
      )}
    </div>
  );
}

export default SeverityScale;