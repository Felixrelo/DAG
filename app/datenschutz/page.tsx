"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/lib/language-context";
import brandConfig from "@/brand.json";

export default function DatenschutzPage() {
  const { language } = useLanguage();
  const primaryColor = brandConfig.theme?.colors?.primary || "#1E4785";

  const de = {
    title: "Datenschutzerklärung",
    sections: [
      {
        title: "1. Datenschutz auf einen Blick",
        subsections: [
          {
            title: "Allgemeine Hinweise",
            content: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung."
          },
          {
            title: "Datenerfassung auf dieser Website",
            content: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt 'Hinweis zur Verantwortlichen Stelle' in dieser Datenschutzerklärung entnehmen."
          },
          {
            title: "Wie erfassen wir Ihre Daten?",
            content: "Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten."
          },
          {
            title: "Wofür nutzen wir Ihre Daten?",
            content: "Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden."
          },
          {
            title: "Welche Rechte haben Sie bezüglich Ihrer Daten?",
            content: "Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu."
          }
        ]
      },
      {
        title: "2. Hosting",
        subsections: [
          {
            title: "Externes Hosting",
            content: "Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln. Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO)."
          }
        ]
      },
      {
        title: "3. Allgemeine Hinweise und Pflichtinformationen",
        subsections: [
          {
            title: "Datenschutz",
            content: "Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich."
          },
          {
            title: "Hinweis zur verantwortlichen Stelle",
            content: "Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:\n\nFadime Dag\nDag Logistik\nViktoriastraße 3b\n86156 Augsburg\n\nTelefon: 0821 999 766 23\nE-Mail: info@dag-logistik.de\n\nVerantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet."
          },
          {
            title: "Speicherdauer",
            content: "Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe."
          },
          {
            title: "Widerruf Ihrer Einwilligung zur Datenverarbeitung",
            content: "Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt."
          },
          {
            title: "Beschwerderecht bei der zuständigen Aufsichtsbehörde",
            content: "Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe."
          },
          {
            title: "Recht auf Datenübertragbarkeit",
            content: "Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist."
          },
          {
            title: "Auskunft, Löschung und Berichtigung",
            content: "Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden."
          },
          {
            title: "Recht auf Einschränkung der Verarbeitung",
            content: "Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit an uns wenden."
          }
        ]
      },
      {
        title: "4. Datenerfassung auf dieser Website",
        subsections: [
          {
            title: "Kontaktformular",
            content: "Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde. Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt."
          },
          {
            title: "Anfrage per E-Mail, Telefon oder Telefax",
            content: "Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde."
          }
        ]
      }
    ],
    source: "Quelle: e-recht24.de"
  };

  const en = {
    title: "Privacy Policy",
    sections: [
      {
        title: "1. Privacy at a Glance",
        subsections: [
          {
            title: "General Information",
            content: "The following information provides a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to personally identify you. For detailed information on data protection, please refer to our privacy policy listed below this text."
          },
          {
            title: "Data Collection on This Website",
            content: "Data processing on this website is carried out by the website operator. You can find their contact details in the section 'Information on the Responsible Party' in this privacy policy."
          },
          {
            title: "How Do We Collect Your Data?",
            content: "Your data is collected in part by you providing it to us. This may be data that you enter in a contact form, for example. Other data is automatically collected or collected with your consent when you visit the website by our IT systems. This is primarily technical data (e.g., internet browser, operating system, or time of page access). This data is collected automatically as soon as you enter this website."
          },
          {
            title: "What Do We Use Your Data For?",
            content: "Part of the data is collected to ensure error-free provision of the website. Other data may be used to analyze your user behavior."
          },
          {
            title: "What Rights Do You Have Regarding Your Data?",
            content: "You have the right to receive information about the origin, recipient, and purpose of your stored personal data free of charge at any time. You also have the right to request the correction or deletion of this data. If you have given consent to data processing, you can revoke this consent at any time for the future. You also have the right to request the restriction of the processing of your personal data under certain circumstances. Furthermore, you have the right to lodge a complaint with the competent supervisory authority."
          }
        ]
      },
      {
        title: "2. Hosting",
        subsections: [
          {
            title: "External Hosting",
            content: "This website is hosted by an external service provider (host). The personal data collected on this website is stored on the host's servers. This may include IP addresses, contact requests, meta and communication data, contract data, contact details, names, website access, and other data generated via a website. The host is used for the purpose of fulfilling contracts with our potential and existing customers (Art. 6 para. 1 lit. b GDPR) and in the interest of secure, fast, and efficient provision of our online offer by a professional provider (Art. 6 para. 1 lit. f GDPR)."
          }
        ]
      },
      {
        title: "3. General Information and Mandatory Information",
        subsections: [
          {
            title: "Data Protection",
            content: "The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with statutory data protection regulations and this privacy policy. When you use this website, various personal data is collected. Personal data is data that can be used to personally identify you. This privacy policy explains what data we collect and what we use it for. It also explains how and for what purpose this is done. We would like to point out that data transmission over the Internet (e.g., when communicating by email) may have security gaps. Complete protection of data against access by third parties is not possible."
          },
          {
            title: "Information on the Responsible Party",
            content: "The responsible party for data processing on this website is:\n\nFadime Dag\nDag Logistik\nViktoriastraße 3b\n86156 Augsburg\n\nPhone: +49 821 999 766 23\nEmail: info@dag-logistik.de\n\nThe responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g., names, email addresses, etc.)."
          },
          {
            title: "Storage Duration",
            content: "Unless a more specific storage period has been stated within this privacy policy, your personal data will remain with us until the purpose for data processing no longer applies. If you assert a legitimate request for deletion or revoke consent to data processing, your data will be deleted unless we have other legally permissible reasons for storing your personal data (e.g., tax or commercial law retention periods); in the latter case, deletion will take place after these reasons cease to apply."
          },
          {
            title: "Revocation of Your Consent to Data Processing",
            content: "Many data processing operations are only possible with your express consent. You can revoke consent you have already given at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation."
          },
          {
            title: "Right to Lodge a Complaint with the Competent Supervisory Authority",
            content: "In the event of violations of the GDPR, data subjects have a right to lodge a complaint with a supervisory authority, in particular in the Member State of their habitual residence, their place of work, or the place of the alleged violation. The right to lodge a complaint exists without prejudice to other administrative or judicial remedies."
          },
          {
            title: "Right to Data Portability",
            content: "You have the right to have data that we process automatically on the basis of your consent or in fulfillment of a contract handed over to you or to a third party in a common, machine-readable format. If you request the direct transfer of data to another controller, this will only be done to the extent that it is technically feasible."
          },
          {
            title: "Information, Deletion and Correction",
            content: "Within the framework of the applicable legal provisions, you have the right to free information about your stored personal data, its origin and recipients, and the purpose of data processing and, if applicable, a right to correction or deletion of this data at any time. You can contact us at any time for this and other questions on the subject of personal data."
          },
          {
            title: "Right to Restriction of Processing",
            content: "You have the right to request the restriction of the processing of your personal data. You can contact us at any time for this purpose."
          }
        ]
      },
      {
        title: "4. Data Collection on This Website",
        subsections: [
          {
            title: "Contact Form",
            content: "If you send us inquiries via the contact form, your details from the inquiry form, including the contact data you provided there, will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent. The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested. The data you enter in the contact form will remain with us until you request us to delete it, revoke your consent to storage, or the purpose for data storage no longer applies (e.g., after your request has been processed). Mandatory statutory provisions - in particular retention periods - remain unaffected."
          },
          {
            title: "Inquiry by Email, Telephone or Fax",
            content: "If you contact us by email, telephone, or fax, your inquiry including all resulting personal data (name, inquiry) will be stored and processed by us for the purpose of processing your request. We do not pass on this data without your consent. The processing of this data is based on Art. 6 para. 1 lit. b GDPR if your request is related to the fulfillment of a contract or is necessary for the implementation of pre-contractual measures. In all other cases, the processing is based on our legitimate interest in the effective processing of inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this has been requested."
          }
        ]
      }
    ],
    source: "Source: e-recht24.de"
  };

  const content = language === "de" ? de : en;

  return (
    <>
      <Header />
      <main className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8" style={{ color: primaryColor }}>
            {content.title}
          </h1>

          <div className="prose prose-lg max-w-none space-y-10">
            {content.sections.map((section, sectionIndex) => (
              <section key={sectionIndex}>
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                  {section.title}
                </h2>
                <div className="space-y-6">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 className="text-xl font-medium text-gray-800 mb-3">
                        {subsection.title}
                      </h3>
                      <p className="text-gray-700 whitespace-pre-line">
                        {subsection.content}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <section className="pt-4 border-t border-gray-200">
              <p className="text-gray-500 text-sm">{content.source}</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
