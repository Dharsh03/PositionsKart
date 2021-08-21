// import { Fragment } from 'react';
// import { Helmet } from 'react-helmet';
// import Footer from 'components/Footer';

// import {
//   ProjectContainer,
//   ProjectBackground,
//   ProjectHeader,
//   ProjectSection,
//   ProjectSectionContent,
//   ProjectImage,
//   ProjectSectionHeading,
// } from 'components/ProjectLayout';
// import { useScrollRestore } from 'hooks';
// import { media } from 'utils/style';
// import prerender from 'utils/prerender';
// import dttBackground from 'assets/dtt-background.jpg';
// import dttBackgroundLarge from 'assets/dtt-background-large.jpg';
// import dttBackgroundPlaceholder from 'assets/dtt-background-placeholder.jpg';
// import dtt from 'assets/dtt.jpg';
// import dttLarge from 'assets/dtt-large.jpg';
// import dttPlaceholder from 'assets/dtt-placeholder.jpg';


// const title = 'A Tool for Everything';
// const description = 'Creating a platform for developers to build better software.';
// const roles = ['Branding', 'UX and UI Design', 'Full Stack Development'];

// const ProjectDTT = () => {
//   useScrollRestore();

//   return (
//     <Fragment>
//       <Helmet>
//         <title>Projects | {title}</title>
//         <meta name="description" content={description} />
//       </Helmet>
//       <ProjectContainer>
//         <ProjectBackground
//           srcSet={`${dttBackground} 1080w, ${dttBackgroundLarge} 2160w`}
//           placeholder={dttBackgroundPlaceholder}
//           entered={!prerender}
//         />
//         <ProjectHeader title={title} description={description} roles={roles} />
//         <ProjectSection first>
//           <ProjectSectionContent>
//             <ProjectImage
//               raised
//               srcSet={`${dtt} 1280w, ${dttLarge} 2560w`}
//               placeholder={dttPlaceholder}
//               sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
//               alt="Landing page of DevTech Tools."
//             />
//           </ProjectSectionContent>
//         </ProjectSection>
        
//         <ProjectSection>
//           <ProjectSectionHeading>Full project coming soon...</ProjectSectionHeading>
        
        
//         </ProjectSection>
        


//       </ProjectContainer>
//       <Footer />
//     </Fragment>
//   );
// };

// export default ProjectDTT;


import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import Link from 'components/Link';
import { Button } from 'components/Button';
import Footer from 'components/Footer';
import {
  ProjectContainer,
  ProjectBackground,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectImage,
  ProjectSectionHeading,
  ProjectSectionColumns,
  ProjectTextRow,
  ProjectSectionText,
} from 'components/ProjectLayout';
import SegmentedControl, { SegmentedControlOption } from 'components/SegmentedControl';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext, useScrollRestore } from 'hooks';
import { media } from 'utils/style';
import prerender from 'utils/prerender';
import deviceModelsBackground from 'assets/device-models-background.jpg';
import deviceModelsBackgroundLarge from 'assets/device-models-background-large.jpg';
import deviceModelsBackgroundPlaceholder from 'assets/device-models-background-placeholder.jpg';
import deviceModels from 'assets/device-models.jpg';
import deviceModelsLarge from 'assets/device-models-large.jpg';
import deviceModelsPlaceholder from 'assets/device-models-placeholder.jpg';
import deviceModelsBranding from 'assets/device-models-branding.png';
import deviceModelsBrandingLarge from 'assets/device-models-branding-large.png';
import deviceModelsBrandingPlaceholder from 'assets/device-models-branding-placeholder.png';
import deviceModelsBanner from 'assets/device-models-banner.jpg';
import deviceModelsBannerLarge from 'assets/device-models-banner-large.jpg';
import deviceModelsBannerPlaceholder from 'assets/device-models-banner-placeholder.jpg';
import deviceModelsComponentsDark from 'assets/laptop1.png';
import deviceModelsComponentsDarkLarge from 'assets/laptop1.png';
import deviceModelsComponentsDarkPlaceholder from 'assets/laptop1.png';
import deviceModelsComponentsLight from 'assets/laptop1.png';
import deviceModelsComponentsLightLarge from 'assets/laptop1.png';
import deviceModelsComponentsLightPlaceholder from 'assets/laptop1.png';
import deviceModelsLogo from 'assets/device-models-logo.png';
import deviceModelsLogoLarge from 'assets/device-models-logo-large.png';
import deviceModelsLogoPlaceholder from 'assets/device-models-logo-placeholder.png';
import './client.css';

const title = 'Services';
const description =
  'Design and development of a Figma plugin to create mockups with 3D device models.';
const roles = [
  'Sales and Marketing',
  'Recruitment',
  'Go to Market Strategy',
  // 'Motion Design',
];

const ProjectDM = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();
  useScrollRestore();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <Helmet>
        <title>PositionsKart | Services{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${deviceModelsBackground} 1080w, ${deviceModelsBackgroundLarge} 2160w`}
          placeholder={deviceModelsBackgroundPlaceholder}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://devicemodels.com"
          roles={roles}
        />
        <ProjectSection first>
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={`${deviceModels} 1280w, ${deviceModelsLarge} 2560w`}
              placeholder={deviceModelsPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Device Models plugin interface."
            />
          </ProjectSectionContent>
        </ProjectSection>
        {/* <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>Whom we are?</ProjectSectionHeading>
            <ProjectSectionText>
            We’re young and we want to be a curated marketplace that helps an organization to identify their biggest Investment “People”.
This can be solved by referring the most accurate candidates who will “do the right job”. Today we prefer to hire candidates in the traditional way of hiring which will give a personal touch with our candidates and clients.
Our Motto statement - Keep it simple, Do the Expert job
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>What we do?</ProjectSectionHeading>
              <ProjectSectionText>
              Our recruitment services are the important part of our portfolio of Human Resources services. We identify permanent and part time staff for our clients in India and charge a one-time recruitment fee for each successful recruitment. By leveraging our experience, knowledge and contacts we have built over the years we place the right talent in the right role to help our clients access the people they need on a timely basis.Our hiring involves Campus, 
Non-Governmental Organizations, Job Portals and our data base of potential job seekers
We are also keen on placing Students or trainees as Interns with organizations, sometimes without pay in order to gain work experience or satisfy requirements for a qualification
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${deviceModelsBranding} 400w, ${deviceModelsBrandingLarge} 898w`}
              placeholder={deviceModelsBrandingPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="The Device Models color palette and logo, featuring a low poly monogram to convey its 3D allure."
            />
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
        <ProjectSectionHeading>Recruitment and Search Agency</ProjectSectionHeading>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={`${
                isDark ? deviceModelsComponentsDark : deviceModelsComponentsLight
              } 800w, ${
                isDark
                  ? deviceModelsComponentsDarkLarge
                  : deviceModelsComponentsLightLarge
              } 1000w`}
              placeholder={
                isDark
                  ? deviceModelsComponentsDarkPlaceholder
                  : deviceModelsComponentsLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for the Device Models design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              
              <ProjectSectionText>
                Seasoned and Experience team handling recruitment at all levels.
              </ProjectSectionText>
              <ProjectSectionText>
               ~ 7 years Experience of hiring for India and USA markets.
              </ProjectSectionText>
              <ProjectSectionText>
               Use conventional and AI/ML based approach to hire candidates 
              </ProjectSectionText>
              <ProjectSectionText>
                Keeping to a universal,{' '}
                <Link href="https://storybook.devicemodels.com">
                  component-based design
                </Link>
                , the "look and feel" remained nice and tidy, and both the aesthetics and
                user experience were well-informed across the board.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection> */}
        {/* <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Show, not Tell</ProjectSectionHeading>
              <ProjectSectionText>
                I embrace the idea of "show, not tell" when marketing innovative products.
                Wide-spread adoption is momentum-based, and you have to give users a
                reason to jump onboard, hype or not. I like putting the product in front
                of them and letting its productivity powers speak for itself.
              </ProjectSectionText>
              <ProjectSectionText>
                With a bold show of identity, I included the very 3D components used on
                the plugin both within marketing material and online, featuring its
                variations to communicate its flexibility (using Device Models, of
                course).
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${deviceModelsBanner} 1280w, ${deviceModelsBannerLarge} 2560w`}
              placeholder={deviceModelsBannerPlaceholder}
              alt="A promotional banner for Device Models, displaying a variety of devices and bright colors."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection> */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
            <ProjectSectionHeading>Clients</ProjectSectionHeading>
              <div className='client'><Image
                srcSet={`${deviceModelsLogo} 180w, ${deviceModelsLogoLarge} 320w`}
                placeholder={deviceModelsLogoPlaceholder}
                alt="The Device Models logo."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <Image
              srcSet={`${deviceModelsLogo} 180w, ${deviceModelsLogoLarge} 320w`}
              placeholder={deviceModelsLogoPlaceholder}
              alt="The Device Models logo."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
              style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
            />
            <Image
                srcSet={`${deviceModelsLogo} 180w, ${deviceModelsLogoLarge} 320w`}
                placeholder={deviceModelsLogoPlaceholder}
                alt="The Device Models logo."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              />
              <Image
                srcSet={`${deviceModelsLogo} 180w, ${deviceModelsLogoLarge} 320w`}
                placeholder={deviceModelsLogoPlaceholder}
                alt="The Device Models logo."
                sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`}
                style={{ maxWidth: 220, width: '100%', marginBottom: 30 }}
              /></div>
              {/* <ProjectSectionText>
                Within 48 hours of release, Device Models became a popular tool, reaching
                1,000 downloads. You can find the plugin on Figma's featured plugins
                collection to render 3D mockups all across designer spaces.
              </ProjectSectionText>
              <Button
                secondary
                iconHoverShift
                icon="chevronRight"
                href="https://devicemodels.com"
              >
                View on Figma
              </Button> */}
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default ProjectDM;
