import { useLanguage } from "../i18n/LanguageContext";
import RetinaIllustration from "./RetinaIllustration";

// x and y are percentages of the picture width and height
const markers = [
  { n: 1, x: 67.5, y: 47.5 },
  { n: 2, x: 46.5, y: 32.5 },
  { n: 3, x: 42.5, y: 50 },
  { n: 4, x: 46, y: 64 },
  { n: 5, x: 30, y: 70 },
  { n: 6, x: 31, y: 50 },
];

function AnnotatedRetina() {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-teal-800">{t("anno.title")}</h2>
      <p className="mt-1 text-slate-600 text-sm">{t("anno.subtitle")}</p>

      <div className="mt-6 grid md:grid-cols-2 gap-8 items-center">
        <div className="relative mx-auto h-72 w-72 sm:h-80 sm:w-80">
          <RetinaIllustration severity={3} className="h-full w-full" />
          {markers.map((m) => (
            <span
              key={m.n}
              style={{ left: `${m.x}%`, top: `${m.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center ring-2 ring-white shadow"
            >
              {m.n}
            </span>
          ))}
        </div>

        <ol className="space-y-3">
          {markers.map((m) => (
            <li key={m.n} className="flex gap-3 items-start text-sm text-slate-700">
              <span className="h-6 w-6 shrink-0 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center">
                {m.n}
              </span>
              {t(`anno.${m.n}`)}
            </li>
          ))}
        </ol>
      </div>

      <p className="mt-4 text-xs text-slate-500">{t("anno.note")}</p>
    </div>
  );
}

export default AnnotatedRetina;