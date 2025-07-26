import React from 'react'
import { 
  Button, 
  Html, 
  Font,
  Head,
  Body,
  Heading, 
  Section,
  Container, 
  Link,
  Row,
  Column,
  Img, 
  Hr,
  Text, 
  Tailwind 
} from "@react-email/components";
import { px } from 'framer-motion';

interface ReceivedProps {
  firstName: string;
}

const Received: React.FC<Readonly<ReceivedProps>> = ({
  firstName, 
}) => {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
        <Font
          fontFamily="Figtree"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/figtree/v8/_Xms-HUzqDCFdgfMm4S9DaRvzig.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Figtree"
          fallbackFontFamily="Verdana"
          webFont={{
            url: "https://fonts.gstatic.com/s/figtree/v8/_Xms-HUzqDCFdgfMm4S9DaRvzig.woff2",
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
        <Tailwind>
          <Body>
            <Container style={containerStyles}>
              <Section style={headerSection}>
                <Column align="center">
                  <Img src='https://images.ctfassets.net/7r1ctwpcnyrk/2J8Nazd9YAQTekVQQUnFtb/02d0182e0089f0586cc40170e3529131/asiaAvatarDark.png' alt="default avatar" width="120" height="120"/>
                  <Heading as='h1'>Thanks for reaching out, {firstName}! 👋🏽</Heading>
                  <Heading as='h2'>Your message has been received!</Heading>
                </Column>
              </Section>
              <Section style={bodySection}>
                <Text style={bodyText}>You should be hearing back from me in <span className='font-bold'>less than 1 business day</span>.</Text>
                <Text style={bodyText}>If it's a weekday between 8 A.M. - 5 P.M. PST be on the lookout for a response in a few hours, with holidays being the exception.</Text>
                <Text style={bodyText}>In the meantime you can get a better understanding of who I am by exploring my blog or checking out some of my favorite case studies.</Text>
                <Text style={bodyText}>Regardless, I appreciate you reaching out and look forward to connecting soon!</Text>
                <Text style={bodyText} className='pt-[32px]'>Asia</Text>
              </Section>
              <Section>
                <Hr className="border-slate-200" />
                <Section style={signatureSection}>
                  <Heading as="h2" style={signatureHeader}>Asia Thompson</Heading>
                  <Text style={bodyText}>Digital Product Designer & Full-Stack Developer</Text>
                  <Row>
                    
                    <Column style={footerLeftColumn}>
                      <Img
                        alt="Asia Thompson Logo"
                        width="120"
                        height="120"
                        className='rounded-[120px]'
                        src="https://images.ctfassets.net/7r1ctwpcnyrk/1THnD20e0AfFmsmSbgh2oz/8f70ff5a2b74338d0ac9ddd6e320352f/profile-pic.png"
                      />
                    </Column>
                    
                    <Column align="left" className="table-cell align-bottom">
                      <Text className="text-slate-700" style={footerText}>Based out of Henderson, NV & Anaheim, CA</Text>
                      <Text className="text-slate-700" style={footerText}>@asiaIsOnline</Text>
                      <Row className="table-cell h-[40px] w-[56px] align-center">
                        <Column className="pr-[24px]">
                          <Link href={linkedinLink}>
                            <Img
                              alt="LinkedIn"
                              height="28"
                              src="https://images.ctfassets.net/7r1ctwpcnyrk/5UYNojrIXsLFAnJwqLuMk/100fb2016f60696cb68f56c50eb140c0/mdi_linkedin.png"
                              width="28"
                            />
                          </Link>
                        </Column>
                        <Column className="pr-[24px]">
                          <Link href={twitterLink}>
                            <Img 
                              alt="X" 
                              height="28" 
                              src="https://images.ctfassets.net/7r1ctwpcnyrk/5Rq4HYUYQ5cs2BUs86fWdv/29f19687c12f20db53394294c36b72e8/prime_twitter.png" 
                              width="28" 
                            />
                          </Link>
                        </Column>
                        <Column className="pr-[24px]">
                          <Link href={faceBookLink}>
                            <Img
                              alt="Facebook"
                              height="28"
                              src="https://images.ctfassets.net/7r1ctwpcnyrk/14lcYK3i5VAoDOyuB6JeQt/0fe96ccccb5f87c64038aa54457363bc/ic_baseline-facebook.png"
                              width="28"
                            />
                          </Link>
                        </Column>
                        <Column>
                          <Link href={instagramLink}>
                            <Img
                              alt="Instagram"
                              height="28"
                              src="https://images.ctfassets.net/7r1ctwpcnyrk/8oPQCviGtWACNzvkn9AsD/23224dff0b38927ba89875fb39985136/ri_instagram-fill.png"
                              width="28"
                            />
                          </Link>
                        </Column>
                      </Row>
                    </Column>
                  </Row>
                </Section>
              </Section>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  }

export default Received;

  const containerStyles = {
    width: '648px',
    maxWidth: '100%',
    border: '1px solid #eee',
    borderRadius: '5px',
    boxShadow: '0 5px 10px rgba(20,50,70,.2)',
    paddingLeft: '24px',
    paddingRight: '24px',
    paddingTop: '24px',
    marginTop: '24px',
    marginBottom: '48px'
  }

  const headerSection = {
    backgroundColor: '#4E4AB7',
    color: '#F5F5F5',
    paddingLeft: '16px',
    paddingRight: '16px',
    paddingTop: '24px' 
  }

  const bodySection = {
    paddingTop: '24px',
    paddingBottom: '24px',
    paddingLeft: '16px',
    paddingRight: '16px',
    fontSize: '16px',
  }

  const bodyText = {
    fontSize: '16px',
  }
  
  const signatureHeader = {
    color: '#4E4AB7',
  }

  const signatureSection = {
    paddingTop: '24px',
    paddingBottom: '48px',
    paddingLeft: '16px',
    paddingRight: '16px',
    backgroundColor: '#F5F5F5',
  }

  const footerLeftColumn = {
    width: '120px',
    paddingRight: '24px',
  }

  const footerText = {
    fontSize: '14px',
  }

  const faceBookLink = "https://www.facebook.com/people/Asia-Thompson/61578269982896/"
  const twitterLink = "https://x.com/asiaIsOnline"
  const instagramLink = "https://www.instagram.com/asiaisonline/"
  const linkedinLink = "https://www.linkedin.com/in/asiaisonline/"