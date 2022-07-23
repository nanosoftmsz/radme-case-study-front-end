import { Button, Card, Col, Divider, Radio, Row, Space, Typography } from 'antd';
import { ClockCircleFilled, FundFilled, MinusCircleFilled, PauseCircleFilled, CheckCircleFilled } from '@ant-design/icons';

import ExamLayout from '../../layouts/ExamLayout';
import { useState } from 'react';

const { Link, Text, Title } = Typography;
const ExamPage = () => {
  const [showContent, setShowContent] = useState(false);

  const submitAnswer = () => {
    setShowContent(!showContent);
    window.scrollTo(0, 0);
  };

  return (
    <ExamLayout>
      <Title level={3} align='center'>
        Question Number 1
      </Title>

      <Row gutter={[16]} className='mt-2'>
        <Col xs={12} style={{ display: 'flex', gap: '1em' }}>
          <Text>Question ID: 382932</Text>
          <Text>Time Spent: 00:00:12</Text>
        </Col>
        <Col xs={12} style={{ display: 'flex', justifyContent: 'end', gap: '1em' }}>
          <Button color='secondary' type='outlined' icon={<PauseCircleFilled />}>
            Suspend
          </Button>
          <Button danger type='outlined' icon={<MinusCircleFilled />}>
            End Block
          </Button>
        </Col>
      </Row>

      <Row className='mt-1'>
        <Col xs={24}>
          <Card>
            <Row gutter={[16]}>
              <Col xs={24}>
                <Text>
                  A 13-year-old girl is brought to the clinic by her mother for a yearly physical examination.&nbsp; The patient feels well but is worried that she has not yet started puberty.&nbsp;
                  Temperature is 36.7 C (98 F), blood pressure is 152/91 mm Hg, pulse is 75/min, and respirations are 18/min.&nbsp; Physical examination is significant for a lack of secondary sexual
                  characteristics; a blind vagina is noted on pelvic examination.&nbsp; Laboratory studies reveal hypokalemia and low testosterone and estradiol levels.&nbsp; Cytogenetic analysis
                  shows a 46,XY karyotype.&nbsp; This patient most likely has deficiency of which of the following enzymes?
                </Text>
              </Col>
              <Col xs={24} className='mt-1'>
                <Space direction='vertical'>
                  <Text strong>Choose your answer</Text>
                  <Radio value={1}>Option A</Radio>
                  <Radio value={2}>Option B</Radio>
                  <Radio value={3}>Option C</Radio>
                  <Radio value={3}>Option D</Radio>
                </Space>
              </Col>
            </Row>
            {showContent && (
              <>
                <Card className='mt-1' hoverable>
                  <Row gutter={[16]} justify='space-between' align='middle'>
                    <Col xs={24} sm={6}>
                      <Text strong type='success'>
                        <CheckCircleFilled /> Correct Answer
                      </Text>
                    </Col>
                    <Col xs={24} sm={6} style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text strong>
                        <FundFilled /> &nbsp;&nbsp;66%
                      </Text>
                      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Answered Correctly</Text>
                    </Col>
                    <Col xs={24} sm={6} style={{ display: 'flex', flexDirection: 'column' }}>
                      <Text strong>
                        <ClockCircleFilled />
                        &nbsp;&nbsp;10 mins 11 sec
                      </Text>
                      <Text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Time Spent</Text>
                    </Col>
                  </Row>
                </Card>

                <Row gutter={[16]} className='mt-1'>
                  <Col xs={24}>
                    <Divider orientation='left'>Question Source</Divider>
                  </Col>
                  <Col xs={24} sm={8} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text strong>Gastrointestinal</Text>
                    <Text>System</Text>
                  </Col>
                  <Col xs={24} sm={8} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text strong>Abdominal Aorta, Anus</Text>
                    <Text>Organ</Text>
                  </Col>
                  <Col xs={24} sm={8} style={{ display: 'flex', flexDirection: 'column' }}>
                    <Text strong>Abdominal Aortic Aneurysm </Text>
                    <Text>Diagnosis</Text>
                  </Col>
                </Row>

                <Row gutter={[16]} className='mt-1'>
                  <Col xs={24}>
                    <Divider orientation='left'>Explanation</Divider>
                  </Col>
                  <Col xs={24}>
                    <p>
                      Welcome to the My Notebook feature of the UWorld QBank. This feature allows you to create a customizable electronic notebook full of high-yield information that you can review at
                      any time.
                    </p>
                    <p>
                      The My Notebook feature is available both within the main (left-sided) menu bar of the QBank and within the practice test interface. Inside the test interface, you can open My
                      Notebook either by clicking the “My Notebook” button in the menu bar or by selecting content from the question/explanation and choosing the option to add it to My Notebook.
                    </p>
                    <p>
                      You can copy any written or visual material from the questions or explanations into My Notebook. Basic editor functionality (eg, bolding, highlighting, bullet points) is
                      available to help you personalize your notes.
                    </p>
                    <p>
                      My Notebook includes a default structure of pages that mirrors the Systems and Categories of the QBank. These are offered as a template for how to structure your notebook.
                      However, you can customize your notebook by creating additional pages or deleting any default pages you don’t find helpful. If you want to reorganize your notebook,
                      click-and-drag your pages in the left navigation panel to adjust the structure. You can create up to four levels of organization and move pages between sections and levels as you
                      see fit.
                    </p>
                    <p>
                      If you reset your QBank, My Notebook content will be preserved during the reset so you can continue to review it during your next pass through the QBank. Please note: Content
                      within the “Notes” feature, which is linked directly to individual questions and is distinct from “My Notebook,” does not carry over during QBank reset.
                    </p>
                  </Col>
                  <Divider orientation='left'>References</Divider>
                  <Col xs={24}>
                    <ul>
                      <li>
                        <Link href='https://google.com' target='_blank'>
                          https://pubmed.ncbi.nlm.nih.gov/26862015/
                        </Link>
                      </li>
                      <li>
                        <Link href='https://google.com' target='_blank'>
                          https://pubmed.ncbi.nlm.nih.gov/26862015/
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </>
            )}
            <Row justify='center' className='mt-2'>
              <Button type='primary' onClick={submitAnswer}>
                Submit Answer
              </Button>
            </Row>
          </Card>
          <Row justify='space-between' className='mt-1'>
            <Button type='dashed'>Previous</Button>
            <Button type='primary'>Next</Button>
          </Row>
        </Col>
      </Row>
    </ExamLayout>
  );
};

export default ExamPage;
