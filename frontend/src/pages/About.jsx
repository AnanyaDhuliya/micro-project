import {
  Clock,
  Droplet,
  Activity,
  HeartPulse,
  Baby,
  Ban,
  CalendarCheck,
  Apple,
  AlertTriangle,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import RetinaIllustration from "../components/RetinaIllustration";
import AnnotatedRetina from "../components/AnnotatedRetina";
import SeverityScale from "../components/SeverityScale";
import ProcessDiagram from "../components/ProcessDiagram";

// Same order as the "about.risk.list" translation
const riskIcons = [Clock, Droplet, Activity, HeartPulse, Baby, Ban];

const preventionIcons = [Droplet, Activity, CalendarCheck, Apple, Ban];

const textSections = ["screening", "model", "xai"];

function Card({ children }) {
  return (
    <section className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
      {children}
    </section>
  );
}

function About() {
  const { t } = useLanguage();

  return (
    <div>
      <div className="max-w-4xl mx-auto px-4 pt-12">
        <h1 className="text-3xl font-bold text-slate-900">{t("about.title")}</h1>
        <p className="mt-2 text-slate-600">{t("about.subtitle")}</p>
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-8 space-y-6">
        {/* What is DR + healthy vs affected */}
        <Card>
          <h2 className="text-lg font-semibold text-teal-800">{t("about.what.title")}</h2>
          <p className="mt-2 text-slate-700">{t("about.what.body")}</p>

          <h3 className="mt-6 font-semibold text-slate-900">{t("cmp.title")}</h3>
          <div className="mt-4 flex flex-wrap justify-center items-center gap-10">
            <figure className="text-center">
              <RetinaIllustration severity={0} className="h-44 w-44" />
              <figcaption className="mt-2 text-sm font-medium text-green-700">
                {t("cmp.healthy")}
              </figcaption>
            </figure>
            <figure className="text-center">
              <RetinaIllustration severity={4} className="h-44 w-44" />
              <figcaption className="mt-2 text-sm font-medium text-red-700">
                {t("cmp.affected")}
              </figcaption>
            </figure>
          </div>
          <p className="mt-4 text-sm text-slate-600 text-center">{t("cmp.text")}</p>
        </Card>

        {/* Annotated retina */}
        <AnnotatedRetina />

        {/* Severity levels */}
        <Card>
          <h2 className="text-lg font-semibold text-teal-800">{t("sev.title")}</h2>
          <p className="mt-1 text-sm text-slate-600">{t("sev.subtitle")}</p>
          <div className="mt-4">
            <SeverityScale detailed />
          </div>
        </Card>
      </div>

      {/* Process diagram (full width section) */}
      <div className="mt-6">
        <ProcessDiagram />
      </div>

      <div className="max-w-4xl mx-auto px-4 mt-6 space-y-6">
        {/* Risk factors */}
        <Card>
          <h2 className="text-lg font-semibold text-teal-800">{t("about.risk.title")}</h2>
          <div className="mt-4 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {t("about.risk.list").map((item, i) => {
              const Icon = riskIcons[i];
              return (
                <div key={item} className="flex items-center gap-3 bg-slate-50 rounded-lg p-3">
                  <span className="h-10 w-10 shrink-0 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                    <Icon size={20} />
                  </span>
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              );
            })}
          </div>
        </Card>

        {/* Warning signs */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold text-amber-900">
            <AlertTriangle size={20} /> {t("warn.title")}
          </h2>
          <ul className="mt-3 list-disc ml-6 space-y-1 text-amber-900">
            {t("warn.list").map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-amber-800">{t("warn.note")}</p>
        </div>

        {/* Prevention */}
        <Card>
          <h2 className="text-lg font-semibold text-teal-800">{t("prev.title")}</h2>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            {preventionIcons.map((Icon, i) => (
              <div key={i} className="flex gap-3 items-start bg-slate-50 rounded-lg p-4">
                <span className="h-10 w-10 shrink-0 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">{t(`prev.${i + 1}.title`)}</p>
                  <p className="text-sm text-slate-600">{t(`prev.${i + 1}.text`)}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Text sections */}
        {textSections.map((id) => (
          <Card key={id}>
            <h2 className="text-lg font-semibold text-teal-800">{t(`about.${id}.title`)}</h2>
            <p className="mt-2 text-slate-700">{t(`about.${id}.body`)}</p>
          </Card>
        ))}

        {/* Limitations */}
        <Card>
          <h2 className="text-lg font-semibold text-teal-800">{t("about.limits.title")}</h2>
          <ul className="mt-2 list-disc ml-6 space-y-1 text-slate-700">
            {t("about.limits.list").map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>

        {/* FAQ */}
        <Card>
          <h2 className="text-lg font-semibold text-teal-800">{t("faq.title")}</h2>
          <div className="mt-3 divide-y divide-slate-200">
            {[1, 2, 3, 4].map((n) => (
              <details key={n} className="py-3 group">
                <summary className="cursor-pointer font-medium text-slate-900">
                  {t(`faq.q${n}`)}
                </summary>
                <p className="mt-2 text-sm text-slate-600">{t(`faq.a${n}`)}</p>
              </details>
            ))}
          </div>
        </Card>

        {/* Important */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 text-amber-900 mb-12">
          <p className="font-semibold">{t("about.important")}</p>
          <p className="mt-1 text-sm">{t("about.importantText")}</p>
        </div>
      </div>
    </div>
  );
}

export default About;