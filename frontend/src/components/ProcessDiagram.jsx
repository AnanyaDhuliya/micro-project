import { Fragment } from "react";
import {
  Smartphone,
  ArrowRight,
  ArrowDown,
  Brain,
  Stethoscope,
  CheckCircle2,
  CalendarClock,
  AlertTriangle,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import RetinaIllustration from "./RetinaIllustration";
import { SEVERITY_STYLES } from "./severityStyles";

const steps = ["s1", "s2", "s3", "s4"];

function StepArt({ id }) {
  const { t } = useLanguage();

  if (id === "s1") {
    return (
      <div className="flex items-center gap-2">
        <Smartphone size={44} className="text-teal-700" />
        <ArrowRight size={22} className="text-slate-400" />
        <RetinaIllustration severity={2} className="h-20 w-20" />
      </div>
    );
  }

  if (id === "s2") {
    return (
      <div className="flex items-center gap-2">
        <RetinaIllustration severity={2} className="h-20 w-20" />
        <ArrowRight size={22} className="text-slate-400" />
        <Brain size={44} className="text-teal-700" />
      </div>
    );
  }

  if (id === "s3") {
    return (
      <div className="flex flex-col items-center gap-3">
        <RetinaIllustration heatmap severity={2} className="h-20 w-20" />
        <div className="flex gap-1.5">
          {SEVERITY_STYLES.map((s, i) => (
            <span
              key={i}
              className={`h-6 w-6 rounded-full text-[11px] font-bold text-white flex items-center justify-center ${s.dot} ${
                i === 2 ? "ring-2 ring-offset-2 ring-slate-800" : "opacity-50"
              }`}
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // s4: traffic-light advice
  const advice = [
    { color: "bg-green-500", Icon: CheckCircle2, label: t("flow.green") },
    { color: "bg-amber-500", Icon: CalendarClock, label: t("flow.yellow") },
    { color: "bg-red-600", Icon: AlertTriangle, label: t("flow.red") },
  ];
  return (
    <div className="flex items-center gap-3">
      <Stethoscope size={40} className="text-teal-700 shrink-0" />
      <div className="flex flex-col gap-1.5">
        {advice.map(({ color, Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-left">
            <span
              className={`h-6 w-6 rounded-full ${color} text-white flex items-center justify-center shrink-0`}
            >
              <Icon size={14} />
            </span>
            <span className="text-[11px] leading-tight text-slate-700">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProcessDiagram() {
  const { t } = useLanguage();

  return (
    <section className="bg-white border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900 text-center">{t("flow.title")}</h2>
        <p className="mt-2 text-center text-slate-600">{t("flow.subtitle")}</p>

        <div className="mt-10 flex flex-col md:flex-row md:items-stretch gap-4">
          {steps.map((id, i) => (
            <Fragment key={id}>
              <div className="flex-1 bg-slate-50 rounded-2xl border border-slate-200 p-5 flex flex-col items-center text-center">
                <div className="h-9 w-9 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div className="mt-4 h-32 flex items-center justify-center">
                  <StepArt id={id} />
                </div>
                <h3 className="font-semibold text-slate-900">{t(`flow.${id}.title`)}</h3>
                <p className="mt-1 text-sm text-slate-600">{t(`flow.${id}.text`)}</p>
              </div>

              {i < steps.length - 1 && (
                <div className="flex items-center justify-center text-teal-600">
                  <ArrowRight className="hidden md:block" size={28} />
                  <ArrowDown className="md:hidden" size={28} />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessDiagram;