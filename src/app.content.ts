import { t, type Dictionary } from "intlayer";


const appContent = {
  key: "app",
  content: {
    viteLogo: t({
      en: "Vite logo",
      fr: "Logo Vite",
      es: "Logo Vite",
      hi: "विटे लोगो "
    }),
    reactLogo: t({
      en: "React logo",
      fr: "Logo React",
      es: "Logo React",
      hi: "रिएक्ट लोगो"
    }),

    title:t ({
      en: "Intlayer testing English",
      fr : "Tests intercalaires",
      es: "Prueba de intercapas ESPAÑOL",
      hi: "इंटरलेयर परीक्षण हिंदी"
    }),

    count: t({
      en: "count is ",
      fr: "le compte est ",
      es: "el recuento es ",
      hi: "गिनती कितने "
    }),

    // edit: t<ReactNode>({
    //   en: (
    //     <>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </>
    //   ),
    //   fr: (
    //     <>
    //       Éditez <code>src/App.tsx</code> et enregistrez pour tester HMR
    //     </>
    //   ),
    //   es: (
    //     <>
    //       Edita <code>src/App.tsx</code> y guarda para probar HMR
    //     </>
    //   ),
    //   hi: (
    //     <>
    //       <code>src/App.tsx</code> को संपादित करें और HMR परीक्षण के लिए सहेजें
    //     </>
    //   ),
    // }),

    readTheDocs: t({
      en: "Click on the Vite and React logos to learn more",
      fr: "Cliquez sur les logos Vite et React pour en savoir plus",
      es: "Haga clic en los logotipos de Vite y React para obtener más información",
      hi: "अधिक जानने के लिए Vite और React लोगो पर क्लिक करें"
    }),
  },
} satisfies Dictionary;

export default appContent;