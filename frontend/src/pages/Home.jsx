import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Image as ImageIcon,
  ScanEye,
  Languages,
  MapPin,
  Users,
  Hospital,
  Stethoscope,
  GraduationCap,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import RetinaIllustration from "../components/RetinaIllustration";
import ProcessDiagram from "../components/ProcessDiagram";
import SeverityScale from "../components/SeverityScale";

const features = [
  { icon: ImageIcon, key: "f1" },
  { icon: ScanEye, key: "f2" },
  { icon: Languages, key: "f3" },
  { icon: MapPin, key: "f4" },
];

const reasons = ["why1", "why2", "why3"];

const audience = [
  { icon: Users, key: "who1" },
  { icon: Hospital, key: "who2" },
  { icon: Stethoscope, key: "who3" },
  { icon: GraduationCap, key: "who4" },
];

function Home() {
  const { t } = useLanguage();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-sky-50 border-b border-slate-200">
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-teal-200/40 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-sky-200/40 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700 bg-teal-100 px-3 py-1 rounded-full mb-5">
              <ShieldCheck size={14} /> {t("home.badge")}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {t("home.titlePre")}{" "}
              <span className="text-teal-600">{t("home.titleHighlight")}</span>{" "}
              {t("home.titlePost")}
            </h1>
            <p className="mt-5 text-lg text-slate-600">{t("home.subtitle")}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/screening"
                className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 shadow"
              >
                {t("home.start")} <ArrowRight size={18} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-6 py-3 rounded-lg font-semibold border border-slate-300 bg-white hover:bg-slate-100"
              >
                {t("home.learn")}
              </Link>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6">
            <p className="text-xs uppercase tracking-wide text-slate-500 mb-4">
              {t("home.example")}
            </p>
            <div className="flex items-center gap-5">
              <RetinaIllustration heatmap severity={2} className="h-32 w-32 shrink-0" />
              <div>
                <p className="text-sm text-slate-500">{t("home.predicted")}</p>
                <p className="text-xl font-bold text-slate-900">{t("home.exampleCategory")}</p>
                <p className="text-sm text-slate-500 mt-2">{t("home.confidence")}</p>
                <div className="w-40 h-2 bg-slate-200 rounded-full mt-1">
                  <div className="h-2 w-4/5 bg-teal-600 rounded-full"></div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-amber-800 bg-amber-50 rounded-lg p-3">
              {t("home.referral")}
            </p>
          </div>
        </div>
      </section>

      {/* Feature strip */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 -mt-7">
        <div className="bg-white rounded-xl shadow-md border border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-4 p-5">
          {features.map((f) => (
            <div key={f.key} className="flex items-center gap-3 text-sm text-slate-700">
              <f.icon className="text-teal-600 shrink-0" size={24} />
              {t(`home.${f.key}`)}
            </div>
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900 text-center">{t("home.whyTitle")}</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {reasons.map((r) => (
            <div key={r} className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900">{t(`home.${r}.title`)}</h3>
              <p className="mt-2 text-slate-600 text-sm">{t(`home.${r}.text`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Picture-based process diagram */}
      <ProcessDiagram />

      {/* Severity levels */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900 text-center">{t("sev.title")}</h2>
        <p className="mt-2 text-center text-slate-600 max-w-2xl mx-auto">{t("sev.subtitle")}</p>
        <div className="mt-8">
          <SeverityScale />
        </div>
        <div className="mt-6 text-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:underline"
          >
            {t("home.levelsLink")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* See what the AI sees */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-14">
          <h2 className="text-2xl font-bold text-slate-900 text-center">{t("home.seeTitle")}</h2>
          <p className="mt-2 text-center text-slate-600 max-w-2xl mx-auto">{t("home.seeText")}</p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
            <figure className="text-center">
              <RetinaIllustration severity={3} className="h-56 w-56" />
              <figcaption className="mt-2 text-sm font-medium text-slate-700">
                {t("home.imgOriginal")}
              </figcaption>
            </figure>
            <ArrowRight className="text-teal-600 hidden sm:block" size={32} />
            <figure className="text-center">
              <RetinaIllustration heatmap severity={3} className="h-56 w-56" />
              <figcaption className="mt-2 text-sm font-medium text-slate-700">
                {t("home.imgHeatmap")}
              </figcaption>
            </figure>
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">{t("home.imgNote")}</p>
        </div>
      </section>

      {/* Who is it for */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-slate-900 text-center">{t("home.whoTitle")}</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {audience.map((a) => (
            <div key={a.key} className="bg-white rounded-xl border border-slate-200 p-6 text-center shadow-sm">
              <div className="mx-auto h-14 w-14 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center">
                <a.icon size={26} />
              </div>
              <h3 className="mt-3 font-semibold text-slate-900">{t(`home.${a.key}.title`)}</h3>
              <p className="mt-1 text-sm text-slate-600">{t(`home.${a.key}.text`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="max-w-6xl mx-auto px-4 pb-14">
        <div className="bg-teal-600 rounded-2xl text-center text-white px-6 py-10">
          <h2 className="text-2xl font-bold">{t("home.ctaTitle")}</h2>
          <p className="mt-2 text-teal-50">{t("home.ctaText")}</p>
          <Link
            to="/screening"
            className="mt-6 inline-flex items-center gap-2 bg-white text-teal-700 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50"
          >
            {t("home.start")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;