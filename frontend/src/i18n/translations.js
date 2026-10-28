export const translations = {
  en: {
    "lang.switch": "हिंदी",

    "nav.home": "Home",
    "nav.screening": "Screening",
    "nav.results": "Results",
    "nav.history": "History",
    "nav.about": "About",

    "footer.title": "Medical disclaimer: ",
    "footer.text":
      "This is a screening-support prototype and not a replacement for professional medical diagnosis. It has not been clinically validated. Please consult a qualified eye specialist for any health concerns.",

    "home.badge": "Screening-support prototype",
    "home.titlePre": "Explainable AI for",
    "home.titleHighlight": "diabetic retinopathy",
    "home.titlePost": "screening",
    "home.subtitle":
      "Upload a retinal photograph, get a severity prediction, and see exactly which parts of the image influenced it. Built for healthcare workers in rural India.",
    "home.start": "Start Screening",
    "home.learn": "Learn more",
    "home.example": "Example output (illustration only)",
    "home.predicted": "Predicted category",
    "home.exampleCategory": "Moderate DR",
    "home.confidence": "Confidence",
    "home.referral": "Refer to an eye specialist for a full examination.",

    "home.whyTitle": "Why early screening matters",
    "home.why1.title": "Often silent at first",
    "home.why1.text":
      "Early diabetic retinopathy can have no symptoms, so people may not know they are affected.",
    "home.why2.title": "Treatable when found early",
    "home.why2.text":
      "Timely referral and treatment can lower the risk of serious vision loss.",
    "home.why3.title": "Specialists are far away",
    "home.why3.text":
      "In rural areas, reaching an eye specialist can take hours. Screening support helps decide who needs to go.",

    "home.howTitle": "How it works",
    "home.step": "STEP",
    "home.s1.title": "Upload",
    "home.s1.text": "Add a clear retinal photograph taken during a routine check.",
    "home.s2.title": "AI analysis",
    "home.s2.text": "The model predicts one of five severity categories.",
    "home.s3.title": "See why",
    "home.s3.text":
      "A Grad-CAM heatmap highlights the regions that influenced the result.",
    "home.s4.title": "Next step",
    "home.s4.text":
      "Get clear referral guidance to share with an eye specialist.",

    "home.seeTitle": "See what the AI sees",
    "home.seeText":
      "The Grad-CAM heatmap is laid over the photograph to show which areas the model paid attention to.",
    "home.imgOriginal": "Retinal photograph",
    "home.imgHeatmap": "Grad-CAM heatmap",
    "home.imgNote":
      "Illustrations only, not real patient images. Warmer colors mark regions that influenced the prediction more.",

    "home.ctaTitle": "Ready to screen a retinal image?",
    "home.ctaText": "It takes less than a minute.",

    "screen.title": "Screening / Image Upload",
    "screen.tip1": "Use a clear, well-lit retinal (fundus) photograph.",
    "screen.tip2": "Accepted formats: JPG or PNG, up to 5 MB.",
    "screen.tip3": "Avoid blurry, dark, or cropped images.",
    "screen.drop":
      "Drag and drop a retinal image here, or click to choose a file",
    "screen.errType": "Only JPG and PNG images are allowed.",
    "screen.errSize": "File is too large. Maximum size is 5 MB.",
    "screen.errServer":
      "Could not reach the server. Make sure the backend is running.",
    "screen.errGeneric": "Something went wrong.",
    "screen.preview": "Preview",
    "screen.analyze": "Analyze Image",
    "screen.analyzing": "Analyzing...",
    "screen.remove": "Remove",
    "screen.processing": "Processing image...",
    "screen.received":
      "Image received. Model analysis will be added in Phase 5.",
    "screen.imageSize": "Image size",
    "screen.pixels": "pixels",

    "about.title": "About and Awareness",
    "about.subtitle":
      "Learn about diabetic retinopathy and how this screening-support system works.",
    "about.what.title": "What is diabetic retinopathy?",
    "about.what.body":
      "Diabetic retinopathy is an eye condition in which high blood sugar damages the tiny blood vessels in the retina, the light-sensitive layer at the back of the eye. Over time it can cause blurred vision, dark patches, and permanent vision loss.",
    "about.risk.title": "Causes and risk factors",
    "about.risk.list": [
      "Having diabetes for many years",
      "Poorly controlled blood sugar",
      "High blood pressure",
      "High cholesterol",
      "Pregnancy in women with diabetes",
      "Smoking",
    ],
    "about.screening.title": "Why regular screening matters",
    "about.screening.body":
      "Early stages often cause no symptoms. A retinal examination can detect changes before vision is affected, so people with diabetes are generally advised to have regular eye checks.",
    "about.levels.title": "The five severity categories",
    "about.levels.list": [
      "0: No apparent diabetic retinopathy",
      "1: Mild",
      "2: Moderate",
      "3: Severe",
      "4: Proliferative",
    ],
    "about.model.title": "How our AI model works",
    "about.model.body":
      "We use a deep learning model (ResNet50) that was first trained on everyday images and then fine-tuned on public retinal photographs. This approach is called transfer learning. The model looks at a new retinal image and predicts which of the five categories fits best.",
    "about.xai.title": "The role of Explainable AI",
    "about.xai.body":
      "Along with the prediction, the system produces a Grad-CAM heatmap. Warmer colors show the image regions that influenced the model most. The heatmap helps people inspect the model's behavior, but it does not prove that a prediction is medically correct.",
    "about.limits.title": "Limitations",
    "about.limits.list": [
      "This is a prototype and has not been clinically validated.",
      "Accuracy depends on image quality and on the training dataset.",
      "The model may be less reliable for image types it has not seen.",
      "Rare categories, such as severe cases, are harder for the model to learn.",
    ],
    "about.important": "Important",
    "about.importantText":
      "This system supports screening only. Professional medical evaluation by a qualified eye specialist remains necessary.",
  },

  hi: {
    "lang.switch": "English",

    "nav.home": "होम",
    "nav.screening": "स्क्रीनिंग",
    "nav.results": "परिणाम",
    "nav.history": "इतिहास",
    "nav.about": "जानकारी",

    "footer.title": "चिकित्सा अस्वीकरण: ",
    "footer.text":
      "यह एक स्क्रीनिंग-सहायता प्रोटोटाइप है, पेशेवर चिकित्सा निदान का विकल्प नहीं। इसका चिकित्सकीय सत्यापन नहीं हुआ है। किसी भी स्वास्थ्य संबंधी चिंता के लिए कृपया योग्य नेत्र विशेषज्ञ से परामर्श करें।",

    "home.badge": "स्क्रीनिंग-सहायता प्रोटोटाइप",
    "home.titlePre": "",
    "home.titleHighlight": "मधुमेह रेटिनोपैथी",
    "home.titlePost": "की जाँच के लिए व्याख्यायोग्य AI",
    "home.subtitle":
      "रेटिना की तस्वीर अपलोड करें, गंभीरता का अनुमान पाएँ, और देखें कि तस्वीर के किन हिस्सों ने इस अनुमान को प्रभावित किया। यह ग्रामीण भारत के स्वास्थ्यकर्मियों के लिए बनाया गया है।",
    "home.start": "स्क्रीनिंग शुरू करें",
    "home.learn": "और जानें",
    "home.example": "उदाहरण परिणाम (केवल चित्रण)",
    "home.predicted": "अनुमानित श्रेणी",
    "home.exampleCategory": "मध्यम DR",
    "home.confidence": "विश्वास स्तर",
    "home.referral": "पूर्ण जाँच के लिए नेत्र विशेषज्ञ के पास भेजें।",

    "home.whyTitle": "शुरुआती जाँच क्यों ज़रूरी है",
    "home.why1.title": "शुरुआत में अक्सर कोई लक्षण नहीं",
    "home.why1.text":
      "मधुमेह रेटिनोपैथी के शुरुआती चरण में कोई लक्षण नहीं दिख सकते, इसलिए लोगों को पता ही नहीं चलता कि वे प्रभावित हैं।",
    "home.why2.title": "जल्दी पता चलने पर इलाज संभव",
    "home.why2.text":
      "समय पर रेफरल और इलाज से आँखों की रोशनी जाने का खतरा कम हो सकता है।",
    "home.why3.title": "विशेषज्ञ दूर होते हैं",
    "home.why3.text":
      "ग्रामीण इलाकों में नेत्र विशेषज्ञ तक पहुँचने में घंटों लग सकते हैं। स्क्रीनिंग सहायता से तय करने में मदद मिलती है कि किसे जाना ज़रूरी है।",

    "home.howTitle": "यह कैसे काम करता है",
    "home.step": "चरण",
    "home.s1.title": "अपलोड करें",
    "home.s1.text": "नियमित जाँच के दौरान ली गई साफ़ रेटिना तस्वीर जोड़ें।",
    "home.s2.title": "AI विश्लेषण",
    "home.s2.text": "मॉडल पाँच गंभीरता श्रेणियों में से एक का अनुमान लगाता है।",
    "home.s3.title": "कारण देखें",
    "home.s3.text":
      "Grad-CAM हीटमैप उन हिस्सों को दिखाता है जिन्होंने परिणाम को प्रभावित किया।",
    "home.s4.title": "अगला कदम",
    "home.s4.text":
      "नेत्र विशेषज्ञ को दिखाने के लिए स्पष्ट रेफरल मार्गदर्शन पाएँ।",

    "home.seeTitle": "देखें AI क्या देखता है",
    "home.seeText":
      "Grad-CAM हीटमैप तस्वीर पर रंग चढ़ाकर दिखाता है कि मॉडल ने किन हिस्सों पर ध्यान दिया।",
    "home.imgOriginal": "रेटिना की तस्वीर",
    "home.imgHeatmap": "Grad-CAM हीटमैप",
    "home.imgNote":
      "ये केवल चित्रण हैं, असली मरीज़ की तस्वीरें नहीं। गर्म रंग उन हिस्सों को दिखाते हैं जिन्होंने अनुमान को ज़्यादा प्रभावित किया।",

    "home.ctaTitle": "रेटिना तस्वीर की स्क्रीनिंग के लिए तैयार हैं?",
    "home.ctaText": "इसमें एक मिनट से भी कम समय लगता है।",

    "screen.title": "स्क्रीनिंग / तस्वीर अपलोड",
    "screen.tip1": "साफ़, अच्छी रोशनी वाली रेटिना (फंडस) तस्वीर इस्तेमाल करें।",
    "screen.tip2": "स्वीकृत फ़ॉर्मेट: JPG या PNG, अधिकतम 5 MB।",
    "screen.tip3": "धुंधली, अँधेरी या कटी हुई तस्वीरों से बचें।",
    "screen.drop":
      "रेटिना की तस्वीर यहाँ खींचकर छोड़ें, या फ़ाइल चुनने के लिए क्लिक करें",
    "screen.errType": "केवल JPG और PNG तस्वीरें स्वीकार्य हैं।",
    "screen.errSize": "फ़ाइल बहुत बड़ी है। अधिकतम आकार 5 MB है।",
    "screen.errServer":
      "सर्वर से संपर्क नहीं हो सका। जाँचें कि बैकएंड चालू है।",
    "screen.errGeneric": "कुछ गड़बड़ हो गई।",
    "screen.preview": "पूर्वावलोकन",
    "screen.analyze": "तस्वीर का विश्लेषण करें",
    "screen.analyzing": "विश्लेषण हो रहा है...",
    "screen.remove": "हटाएँ",
    "screen.processing": "तस्वीर प्रोसेस हो रही है...",
    "screen.received":
      "तस्वीर मिल गई। मॉडल विश्लेषण अगले चरण में जोड़ा जाएगा।",
    "screen.imageSize": "तस्वीर का आकार",
    "screen.pixels": "पिक्सेल",

    "about.title": "जानकारी और जागरूकता",
    "about.subtitle":
      "मधुमेह रेटिनोपैथी और इस स्क्रीनिंग-सहायता सिस्टम के काम करने के तरीके के बारे में जानें।",
    "about.what.title": "मधुमेह रेटिनोपैथी क्या है?",
    "about.what.body":
      "मधुमेह रेटिनोपैथी आँख की एक समस्या है जिसमें ब्लड शुगर ज़्यादा रहने से रेटिना की बारीक रक्त नलिकाएँ क्षतिग्रस्त हो जाती हैं। रेटिना आँख के पीछे की वह परत है जो रोशनी को पहचानती है। समय के साथ इससे धुंधला दिखना, काले धब्बे और स्थायी रूप से नज़र जाना हो सकता है।",
    "about.risk.title": "कारण और जोखिम कारक",
    "about.risk.list": [
      "कई वर्षों से मधुमेह होना",
      "ब्लड शुगर नियंत्रित न रहना",
      "उच्च रक्तचाप",
      "उच्च कोलेस्ट्रॉल",
      "मधुमेह वाली महिलाओं में गर्भावस्था",
      "धूम्रपान",
    ],
    "about.screening.title": "नियमित जाँच क्यों ज़रूरी है",
    "about.screening.body":
      "शुरुआती चरणों में अक्सर कोई लक्षण नहीं होते। रेटिना की जाँच से नज़र प्रभावित होने से पहले ही बदलाव पकड़े जा सकते हैं, इसलिए मधुमेह वाले लोगों को नियमित रूप से आँखों की जाँच कराने की सलाह दी जाती है।",
    "about.levels.title": "गंभीरता की पाँच श्रेणियाँ",
    "about.levels.list": [
      "0: मधुमेह रेटिनोपैथी के स्पष्ट लक्षण नहीं",
      "1: हल्की",
      "2: मध्यम",
      "3: गंभीर",
      "4: प्रोलिफ़ेरेटिव (अति गंभीर)",
    ],
    "about.model.title": "हमारा AI मॉडल कैसे काम करता है",
    "about.model.body":
      "हम एक डीप लर्निंग मॉडल (ResNet50) इस्तेमाल करते हैं, जिसे पहले रोज़मर्रा की तस्वीरों पर प्रशिक्षित किया गया और फिर सार्वजनिक रेटिना तस्वीरों पर फ़ाइन-ट्यून किया गया। इस तरीके को ट्रांसफ़र लर्निंग कहते हैं। मॉडल नई रेटिना तस्वीर देखकर अनुमान लगाता है कि वह पाँच श्रेणियों में से किसमें आती है।",
    "about.xai.title": "व्याख्यायोग्य AI (Explainable AI) की भूमिका",
    "about.xai.body":
      "अनुमान के साथ सिस्टम एक Grad-CAM हीटमैप भी बनाता है। गर्म रंग उन हिस्सों को दिखाते हैं जिन्होंने मॉडल को सबसे ज़्यादा प्रभावित किया। हीटमैप से मॉडल के व्यवहार को परखने में मदद मिलती है, लेकिन यह साबित नहीं करता कि अनुमान चिकित्सकीय रूप से सही है।",
    "about.limits.title": "सीमाएँ",
    "about.limits.list": [
      "यह एक प्रोटोटाइप है और इसका चिकित्सकीय सत्यापन नहीं हुआ है।",
      "सटीकता तस्वीर की गुणवत्ता और प्रशिक्षण डेटा पर निर्भर करती है।",
      "जिस तरह की तस्वीरें मॉडल ने नहीं देखीं, उन पर यह कम भरोसेमंद हो सकता है।",
      "गंभीर जैसी दुर्लभ श्रेणियाँ मॉडल के लिए सीखना कठिन होती हैं।",
    ],
    "about.important": "महत्वपूर्ण",
    "about.importantText":
      "यह सिस्टम केवल स्क्रीनिंग में सहायता करता है। योग्य नेत्र विशेषज्ञ द्वारा चिकित्सकीय जाँच आवश्यक बनी रहती है।",
  },
};