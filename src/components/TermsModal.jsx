import React, { useState } from 'react';
import { Modal, Text } from '@mantine/core';
import { privacyPolicy } from '../assets/privacyPolicy';
import { termsOfService } from '../assets/teamOfService';

const TermsModal = () => {
  const [opened, setOpened] = useState(false);
  const [content, setContent] = useState('');

  const openModal = (type) => {
    if (type === 'privacy') {
      setContent(privacyPolicy);
    } else if (type === 'terms') {
      setContent(termsOfService);
    }
    setOpened(true);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Text
          component="a"
          onClick={() => openModal('terms')}
          style={{ cursor: 'pointer', color: 'darkgreen', marginRight: '20px' }}
        >
          서비스 이용약관
        </Text>
        <Text
          component="a"
          onClick={() => openModal('privacy')}
          style={{ cursor: 'pointer', color: 'darkgreen' }}
        >
          개인정보 처리방침
        </Text>
      </div>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="이용 약관 및 개인정보 처리방침"
        size="lg"
      >
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Modal>
    </>
  );
};

export default TermsModal;