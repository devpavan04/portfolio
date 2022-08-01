import React from 'react';
import { Text, Page, Spacer, Divider, Link, Row, Card, useTheme } from '@geist-ui/react';
import {
  ArrowDown,
  Github,
  Twitter,
  Mail,
  Linkedin,
  CornerLeftDown,
  CornerRightDown,
  Heart,
  Repeat,
  Code,
} from '@geist-ui/react-icons';
import './App.css';

function App() {
  const theme = useTheme();

  return (
    <Page size='small' style={{ padding: '0 0.66rem', background: '#fff' }}>
      <div>
        <Text style={{ textAlign: 'left', fontSize: '30px', fontWeight: '500' }} h2>
          Pavan Soratur
        </Text>
      </div>
      <Spacer y={1} />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', gap: '1rem' }}>
        <Code />
        {/* <Repeat /> */}
      </div>
      <Spacer y={2} />
      {/* <Spacer y={2} /> */}
      {/* ABOUT ME */}
      <div>
        <Row justify='space-between' align='middle'>
          <Text style={{ color: theme.palette.accents_8, textAlign: 'end', fontSize: '24px', fontWeight: '500' }} h3>
            About me
          </Text>
          <CornerRightDown />
        </Row>
        <Divider style={{ marginTop: '0' }} />
        {/* I am currently{' '}
          <i>BUIDLing</i> and contributing to Web3 at <i>Consenso Labs</i>. */}
        <Text p>
          Hey there! I'm Pavan. I'm a Blockchain Engineer based out of Vancouver, Canada. I'm always looking for
          valuable insights related to Science, Technology, and Philosophy. I like listening to smart people talk on
          podcasts. And also, seeking wisdom excites me the most!
        </Text>
      </div>
      {/* Projects */}
      <div>
        <Row justify='space-between' align='middle'>
          <CornerLeftDown />
          <Text style={{ color: theme.palette.accents_8, textAlign: 'end', fontSize: '24px', fontWeight: '500' }} h3>
            Projects
          </Text>
        </Row>
        <Divider style={{ marginTop: '0' }} />
        <Spacer y={1} />
        <div>
          <Link block color target='_blank' href='https://github.com/devpavan04/cryptoboys-nft-marketplace'>
            Crypto Boy NFT Marketplace
          </Link>
          <Spacer inline x={1} />
          <Link block target='_blank' href='https://github.com/devpavan04/0xWriter'>
            0xWriter
          </Link>
        </div>
        <Spacer y={2} />
      </div>
      {/* Get in touch */}
      <div>
        <Row justify='space-between' align='middle'>
          <Text style={{ color: theme.palette.accents_8, textAlign: 'end', fontSize: '24px', fontWeight: '500' }} h3>
            Get in touch
          </Text>
          <CornerRightDown />
        </Row>
        <Divider style={{ marginTop: '0' }} />
        <Row justify='left' gap={0.8}>
          <Link target='_blank' href='https://github.com/devpavan04'>
            <Github />
          </Link>
          <Spacer inline x={1} />
          <Link target='_blank' href='https://twitter.com/pavansoratur'>
            <Twitter />
          </Link>
          <Spacer inline x={1} />
          <Link target='_blank' href='mailto:pavanvsoratur@gmail.com'>
            <Mail />
          </Link>
          <Spacer inline x={1} />
          <Link target='_blank' href='https://in.linkedin.com/in/pavansoratur'>
            <Linkedin />
          </Link>
        </Row>
      </div>
      {/* <Spacer y={2.4} /> */}
      {/* Built with love */}
      {/* <div>
        <Row justify='center' align='middle'>
          <Text size={18}>Built with</Text>
          <Spacer inline x={0.4} />
          <Heart size={18} />
          <Spacer inline x={0.4} />
          <Text size={18}>by Pavan</Text>
        </Row>
      </div> */}
    </Page>
  );
}

export default App;
