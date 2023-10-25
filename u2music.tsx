/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Layout from '@/components/Layout';
import Link from 'next/link';
import { NextPageWithLayout } from './_app';

const PrivacyPage: NextPageWithLayout = () => {
  return (
    <Layout
      className="privacy"
      header={
        <div className="flex w-full items-center justify-between px-2 desktop:justify-start">
          <div className="flex cursor-pointer gap-[16px]">
            <Link href="/">
              <img src="/assets/images/logo.png" alt="Logo" />
            </Link>
          </div>
        </div>
      }
    >
      <div className="mt-[100px] flex flex-col gap-[12px] px-4 font-normal desktop:mt-[152px] desktop:font-medium">
        <h1 className="mb-2 text-xl desktop:text-2xl">
          <b>U2Music Privacy Policy</b>
        </h1>
        <p>Last modified: March 08, 2023</p>
        <div>
          <h2>
            <b>INTRODUCTION</b>
          </h2>
          <p>
            U2Music respect your privacy and are committed to protecting it through our compliance with this privacy
            policy <span className="font-semibold">"Policy"</span>.
          </p>
          <p>
            This Policy describes how we collect, use, disclose and protect the personal information of the users of our{' '}
            <span className="font-semibold">"Website"</span> and our software application U2Music{' '}
            <span className="font-semibold">"Application"</span>, available on the iOS App Store and Google Play Store.
            The use of {''}
            <span className="font-semibold">"you"</span> {''}
            in this Policy refers to anyone who visits our Website or who uses the Application. Our Website and the
            Application are collectively referred to as the <span className="font-semibold">"Service"</span>.
          </p>
          <p>This Policy also explains your choices about how we manage your personal information.</p>
          <p>
            Privacy laws in Canada generally define <span className="font-semibold">"personal information"</span> as any
            information about an identifiable individual, which includes information that can be used on its own or with
            other information, to identify, contact, or locate a single person.
          </p>
          <p>This Policy applies to personal information we collect, use, or disclose about you:</p>
          <ul>
            <li> On our Website.</li>
            <li>Through the Application.</li>
            <li> In email, text, and other electronic messages between you and the Services.</li>
          </ul>
          <p>
            The Services may include links to third-party websites, services, social networks, or applications. Clicking
            on those links may allow the third party to collect or share data about you. If you follow a link to a
            third-party website, please note that these third parties have their own privacy policies and we do not
            accept any responsibility or liability for these policies. We do not control these third-party websites, and
            we encourage you to read the privacy policy of every website you visit.
          </p>
          <p>
            Please read this Policy carefully to understand our policies and practices for collecting, processing, and
            storing your personal information. If you do not agree with our policies and practices, your choice is not
            to use the Services. By accessing or using the Services, you indicate that you understand, accept, and
            consent to the practices described in this Policy.
          </p>
          <p>
            This Policy may change from time to time (see the Changes to Our Privacy Policy heading below). Your
            continued use of the Services after we make changes, indicates that you accept and consent to those changes,
            so please check the Policy periodically for updates.
          </p>
        </div>
        <div>
          <h2>
            <b>INFORMATION WE COLLECT ABOUT YOU</b>
          </h2>
          <p>We may collect and use several types of information from and about you, including:</p>
          <ul className="flex flex-col gap-1">
            <li>
              <span className="font-semibold">Personal information</span>, that we can reasonably use to directly or
              indirectly identify you, such as your name, e-mail address, user name or other similar identifier, and any
              other identifier we may use to contact you online or offline. Please note that the Services do not collect
              this information in the ordinary course. We only receive it, if you choose to provide it to us.
            </li>
            <li>
              <span className="font-semibold">Non-personal information</span>, that does not directly or indirectly
              reveal your identity or directly relate to an identified individual, including usage information, such as
              videos played, screens viewed and your use of the Application's features and functions, on your device. We
              also collect statistical or aggregated information related to your use of the Application (such as
              information related to your video library, or an IDFA advertising identifier that is assigned to your
              profile).
            </li>
            <li>
              <span className="font-semibold">Technical information</span>, including your IP address, device
              information and U2Music version number.
            </li>
            <li>
              <span className="font-semibold">Non-personal details about your interactions with the Services</span>,
              including the full Uniform Resource Locators (URLs), clickstream to, through and from our Website
              (including date and time), video search queries, page response times, download errors and crash logs,
              length of visits to certain aspects of the Services, page interaction information (such as scrolling,
              clicks, and mouse-overs) or methods used to browse away from the page.
            </li>
          </ul>
          <p>
            As you can see, most of the information we collect is not personal information. This is because the
            information does not contain any information that can be used to identify you, and we do not have the
            ability to link this information to your identity. We do not require you to register an account to use the
            Services, nor do you need to provide us your name or email address.
          </p>
          <p>
            If you would like to opt out of any collection, use or disclosure of your information, by the Services,
            please email us at support@u2music.io, and we will do our best to accommodate your request.
          </p>
        </div>
        <div>
          <h2>
            <b>HOW WE COLLECT INFORMATION ABOUT YOU</b>
          </h2>
          <p>We use different methods to collect your information, including through:</p>
          <ul className="flex flex-col gap-1">
            <li>
              <span className="font-semibold"> Direct interactions with you</span>, when you provide it to us, for
              example, by corresponding with us by email, or otherwise.
            </li>
            <li>
              <span className="font-semibold">Automated technologies or interactions</span>, as you navigate through our
              Website or use the Application. Information collected automatically may include usage details, IP
              addresses, and information collected through the use of your IDFA, which is the identifier that is
              assigned to your device by Apple for the purposes of delivering advertising content to you.
            </li>
          </ul>
          <b className="block pt-1">Information You Provide to Us</b>
          <p>The information we collect directly from you on or through the Services may include:</p>
          <ul className="flex flex-col gap-1">
            <li>Records and copies of your correspondence (including email addresses), if you contact us.</li>
            <li>Your search queries on the Application.</li>
            <li>
              Information provided through the iOS App Store and Google Play Store, to verify your purchase of ad-free
              content.
            </li>
            <li>
              Copies of your video libraries and playlists, so that we can back them up and make them available across
              your devices.
            </li>
          </ul>
          <b className="block pt-1">Information We Collect Through Automatic Data Collection Technologies</b>
          <p>
            As you navigate through and interact with the Services, we may use automatic data collection technologies to
            collect certain information about your device, browsing actions, and patterns, including details of your use
            of the Application, including the frequency and duration of usage, as well as how you interact with
            advertisements that are provided in the Application. This includes information such as the unique ID of your
            device.
          </p>
          <p>
            The information we collect automatically is statistical data and does not include personal information
            (again, because we have no way of linking it to your name or other identifying information), and we may use
            and maintain it, to deliver better and more personalized Services, including by enabling us to:
          </p>
          <ul className="flex flex-col gap-1">
            <li> Estimate our audience size and usage patterns.</li>
            <li>
              Store information about your preferences, allowing us to customize our Services according to your
              individual interests.
            </li>
            <li>Recognize you when you return to the Services.</li>
          </ul>

          <b className="block pt-1">Third Party Use of Cookies and Other Tracking Technologies</b>
          <p>
            Some content or applications on the Services, including advertisements, are served by third-parties,
            including advertisers, ad networks and servers, content providers, and application providers. These third
            parties may use cookies alone or in conjunction with web beacons or other tracking technologies to collect
            information about you when you use the Services. They may collect information about your online activities
            over time and across different websites and other online services. They may use this information to provide
            you with behavioural advertising or other targeted content. In addition to helping advertisers reach the
            right people for their products and services, behavioural advertising helps support the Services so that you
            can enjoy free content.
          </p>
          <p>
            You can opt-out of several third party ad servers' and networks' cookies simultaneously by using opt-out
            tools created by the Digital Advertising Alliance of Canada or the Network Advertising Initiative. You can
            also access these websites to learn more about behavioural advertising and how to stop websites from placing
            cookies on your device. Opting out of a network does not mean you will no longer receive online advertising.
            It does mean that the network from which you opted out will no longer deliver ads tailored to your web
            preferences and usage patterns.
          </p>
          <p>
            We do not control these third parties' tracking technologies or how they are used. If you have any questions
            about an advertisement or other targeted content, you should contact the responsible provider directly. For
            more information about how you can opt out of receiving targeted advertising from many providers, see the
            Choices About How We Use and Disclose Your Information heading below.
          </p>
          <p>
            Our ad network providers include Mintegral North America Inc. (“Mintegral”). Mintegral provides and serves
            some of the ads you may see on the Services. This is accomplished through the embedding of software
            development tools provided to us, by Mintegral, into the Services. These software development tools then
            enable the display of ads, from advertisers, which are provided to us by Mintegral.
          </p>
          <p>
            Mintegral may collect the following information from you, when you view ads that it has provided to us:
            device make, device model, operating system and the operating system version of your device, device type,
            screen size, orientation and battery, carrier information, the fact you accessed the ad through the
            Services, country, time zone and locale settings (country and preferred language), network connection type,
            IP address, SDK version, timestamp, network status such as WiFi, mobile advertising identifier, device event
            information such as crashes, system activity, hardware settings, the date and time of your request and
            referral URL, user-agent, the package name of the Services, IDFV, system file size, system update time,
            system boot time, device user name, RAM (random access memory), remaining available RAM and CPU version and
            information about your interaction with such ads.
          </p>
          <p>
            This information is collected by Mintegral to serve you ads, including for the purposes of delivering
            interest-based advertising, behavioural advertising, cross-app or cross-device advertising, targeting or
            re-targeting ads, and analyzing and building profiles of users who view ads that are served by Mintegral.
            Once Mintegral collects this information, it becomes the controller of that information, as that term is
            recognized by privacy laws.
          </p>
          <p>
            You may opt out of Mintegral’s collection of this information. For more information, please see the Choices
            About How We Use and Disclose Your Information heading below or visit Mintegral’s privacy policy, which you
            can access via the link in the next paragraph.
          </p>
        </div>
        <div>
          <h2>
            <b>HOW WE USE YOUR INFORMATION</b>
          </h2>
          <p>
            We use information that we collect about you or that you provide to us, including any personal information:
          </p>
          <ul className="flex flex-col gap-1">
            <li>
              To present our Services to you and to provide you with information, products, or services that you request
              from us.
            </li>
            <li>To improve our Services.</li>
            <li>
              To fulfill the purposes for which you provided the information or that were described when it was
              collected, or any other purpose for which you provide it.
            </li>
            <li>
              To carry out our obligations and enforce our rights arising from any contracts with you, including for
              billing and collection or to comply with legal requirements.
            </li>
            <li>To notify you about changes to our Services.</li>
            <li>
              To measure or understand the effectiveness of the advertising we serve to you and others, and to deliver
              relevant advertising to you.
            </li>
            <li>For any other purpose, with your consent.</li>
          </ul>
          <p>
            We may use the information we have collected from you to enable us to display advertisements to our
            advertisers' target audiences. Even though we do not disclose your personal information for these purposes
            without your consent, if you click on or otherwise interact with an advertisement, the advertiser may assume
            that you meet its target criteria.
          </p>
        </div>
        <div>
          <h2>
            <b>CHOICES ABOUT HOW WE USE AND DISCLOSE YOUR INFORMATION</b>
          </h2>
          <p>We strive to provide you with choices regarding the personal information you provide to us.</p>
          <p>
            You should know that we use third-party advertising companies to serve advertisements, when you use the
            Application. These companies may use information (not including your name, address, email address or
            telephone number) about your visits to the Website and other websites, in order to provide advertisements
            about goods and services of interest to you. If you would like more information about this practice and to
            know your choices about not having this information used by these companies.
          </p>
          <p>
            We do not control third parties' collection or use of your information to serve interest-based advertising.
            However, these third parties may provide you with ways to choose not to have your information collected or
            used in this way. In addition to the information indicated above under this heading, you can opt-out of
            several third party ad servers’ and networks’ cookies simultaneously by using opt-out tools created by
            Google Advertising, the Digital Advertising Alliance of Canada or by the Network Advertising Initiative. You
            may also opt out of our use of Google Analytics by visiting the Google Analytics opt-out page.
          </p>
          <p>
            In addition, we have created mechanisms to provide you with the following control over your information:
          </p>
          <ul>
            <li>
              <span className="font-semibold">Tracking Technologies and Advertising</span>. You can opt out of IDFA
              tracking within the iOS Settings app. For more information about tracking technologies, see the
              Information We Collect Through Automatic Data Collection Technologies heading above.
            </li>
            <li>
              <span className="font-semibold">Targeted Advertising</span>. If you do not want us to use information that
              we collect or that you provide to us to deliver advertisements according to our advertisers'
              target-audience preferences, you can opt out by using the opt-out tools that are referenced above in this
              section.
            </li>
          </ul>
        </div>
        <div>
          <h2>
            <b>DATA SECURITY</b>
          </h2>
          <p>
            The security of your personal information is very important to us. We use physical, electronic, and
            administrative measures designed to secure your personal information from accidental loss and from
            unauthorized access, use, alteration, and disclosure.
          </p>
          <p>
            Unfortunately, the transmission of information via the Internet is not completely secure. Although we do our
            best to protect your personal information, we cannot guarantee the security of the personal information you
            transmit to our Website. Any transmission of personal information is at your own risk. We are not
            responsible for circumvention of any privacy settings or security measures contained on the Website.
          </p>
        </div>
        <div>
          <h2>
            <b>DATA RETENTION</b>
          </h2>
          <p>
            Except as otherwise permitted or required by applicable law or regulation, we will only retain your personal
            information for as long as is necessary to fulfill the purposes we collected it for, including for the
            purposes of satisfying any legal, accounting, or reporting requirements. Under some circumstances we may
            anonymize your personal information so that it can no longer be associated with you. We reserve the right to
            use such anonymous and de-identified data for any legitimate business purpose without further notice to you,
            or your consent.
          </p>
        </div>
        <div>
          <h2>
            <b>CHILDREN UNDER THE AGE OF 13</b>
          </h2>
          <p>
            The Services are not intended for children under 13 years of age. No one under age 13 may provide any
            personal information to, or through, the Services. We do not knowingly collect personal information from
            children under 13. If you are under 13, do not use or provide any personal information on, or through, the
            Services. If we learn we have collected or received personal information from a child under 13 without
            verification of parental consent, we will delete that personal information. If you believe we might have any
            personal information from or about a child under 13, please contact us at support@u2music.io.
          </p>
        </div>
        <div>
          <h2>
            <b>ACCESSING AND CORRECTING YOUR PERSONAL INFORMATION</b>
          </h2>
          <p>
            It is important that the personal information we hold about you is accurate and current. Please keep us
            informed if your personal information changes. By law, you have the right to request access to and to
            correct the personal information that we hold about you. We will provide access to your personal
            information, subject to exceptions set out in applicable privacy legislation.
          </p>
          <p>
            If you want to review, verify, correct, or withdraw consent to the use of your personal information, you may
            also send us an email at support@u2music.io to request access to, correct, or delete any personal
            information that you have provided to us. We may not accommodate a request to change information if we
            believe the change would violate any law or legal requirement, or cause the information to be incorrect.
          </p>
          <p>
            We may request specific information from you to help us confirm your identity and your right to access, and
            to provide you with the personal information that we hold about you, or make your requested changes.
            Applicable law may allow or require us to refuse to provide you with access to some or all of the personal
            information that we hold about you, or we may have destroyed, erased, or made your personal information
            anonymous in accordance with our record retention obligations and practices. If we cannot provide you with
            access to your personal information, we will inform you of the reasons why, subject to any legal or
            regulatory restrictions.
          </p>
          <p>
            If you are concerned about our response or would like to correct the information provided, you may contact
            our Privacy Officer at support@u2music.io.
          </p>
        </div>
        <div>
          <h2>
            <b>WITHDRAWING YOUR CONSENT</b>
          </h2>
          <p>
            Where you have provided your consent to the collection, use, and transfer of your personal information, you
            may have the legal right to withdraw your consent under certain circumstances. To withdraw your consent, if
            applicable, contact us at support@u2music.io. Please note that if you withdraw your consent we may not be
            able to provide you with a particular product or service. We will explain the impact to you at the time to
            help you with your decision.
          </p>
        </div>
        <div>
          <h2>
            <b>CHANGES TO OUR PRIVACY POLICY</b>
          </h2>
          <p>
            It is our policy to post any changes we make to our Policy, on this page. If we make material changes to how
            we treat our users' personal information, we will notify you through a notice on the Website home page
            and/or through the Application. We include the date the Policy was last revised at the top of this page. You
            are responsible for periodically visiting our Website and this Policy to check for any changes.
          </p>
        </div>
        <div>
          <h2>
            <b>LANGUAGE</b>
          </h2>
          <p>
            We and you have requested and agree that this Policy and all documents related to this Policy be drawn up in
            English.
          </p>
        </div>
        <div>
          <h2>
            <b>CONTACT INFORMATION AND CHALLENGING COMPLIANCE</b>
          </h2>
          <p>
            We welcome your questions, comments, and requests regarding this Policy and our privacy practices. Please
            contact us at: support@u2music.io .
          </p>
          <p>
            We have procedures in place to receive and respond to complaints or inquiries about our handling of personal
            information, our compliance with this Policy, and with applicable privacy laws. To discuss our compliance
            with this Policy, please contact our Privacy Officer using the contact information listed above.
          </p>
        </div>
      </div>

      <div className="px-4 pt-[60px] desktop:w-full desktop:pt-[104px]">
        <div className="flex h-full w-full flex-col gap-[64px]">
          <div className="flex flex-col px-4 desktop:flex-row desktop:justify-between">
            <div>
              <Link href="/">
                <div className="mb-10 flex h-7 w-[121px] hover:cursor-pointer desktop:h-7 desktop:w-[121px]">
                  <div className="w-25 flex h-9 cursor-pointer gap-[16px]">
                    <img className="h-full w-full" src="/assets/images/logo.png" alt="Logo" />
                  </div>
                </div>
              </Link>
              <h4 className="mb-5 hidden font-medium desktop:block">Newsletter</h4>
              <form action="#" className="hidden desktop:block">
                <input
                  className="mr-5 rounded-lg border-2 border-solid border-primary  py-3 pl-3 outline-none"
                  type="text"
                  placeholder="Email address..."
                />
                <button
                  onClick={e => e.preventDefault()}
                  className="w-[113px] rounded-lg bg-primary py-[14px] text-[#fff]"
                >
                  Subscribe
                </button>
              </form>
            </div>
            <div className="flex flex-row gap-20 desktop:flex-1 desktop:justify-evenly">
              <div>
                <h5 className="mb-7 text-lg font-medium">Sitemap</h5>
                <ul>
                  <li className="mb-5 cursor-pointer font-normal hover:text-primary">
                    <Link href="/"> Home</Link>
                  </li>
                  <li className="mb-5 cursor-pointer font-normal hover:text-primary">Features</li>
                  <li className="mb-5 cursor-pointer font-normal hover:text-primary">About</li>
                  <li className="mb-5 cursor-pointer font-normal hover:text-primary">Download</li>
                </ul>
              </div>
              <div className="mb-5">
                <h5 className="mb-7 text-lg font-medium">Social</h5>
                <ul>
                  <li className="mb-5 cursor-pointer font-normal hover:text-primary">
                    <Link href={'#'}>Facebook</Link>
                  </li>
                  <li className="mb-5 cursor-pointer font-normal hover:text-primary">
                    <Link href={'#'}>LinkedIn</Link>
                  </li>
                  <li className="mb-5 cursor-pointer font-normal hover:text-primary">
                    <Link href={'#'}>Instagram</Link>
                  </li>
                  <li className="mb-5 cursor-pointer font-normal hover:text-primary">
                    <Link href={'#'}>Twitter</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h5 className="mb-7 text-lg font-medium">Head Office</h5>
              <p className="mb-10 text-sm font-normal leading-[30px]">
                C9 Lot D21, Dich Vong Hau Street Cau Giay, Hanoi - VN 11300
              </p>
              <Link href="/privacy">
                <p className="mt-[-26px] cursor-pointer hover:text-primary">Privacy</p>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center border-t-[1px] border-solid border-primary  py-7 text-sm font-normal leading-7 desktop:text-base">
            <p>U2U Venture Builder Council</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

PrivacyPage.getLayout = page => <>{page}</>;

export default PrivacyPage;
