import { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Divider,
  Form,
  Input,
  Row,
  Spin,
  Typography,
} from "antd";
import moment from "moment";

import ExamLayout from "../../layouts/ExamLayout";
import { BaseAPI } from "../../utils/Api";
import ErrorHandler from "../../utils/ErrorHandler";
import Notification from "../../components/controls/Notification";
import { useHistory, useParams } from "react-router-dom";
import { getItem, setItem } from "../../utils/Helper";

const { Text } = Typography;
const { TextArea } = Input;

const ExamPage = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [questionInformation, setQuestionInformation] = useState({});
  const [remainingTime, setRemainingTime] = useState("");
  const [findingsInfo, setFindingsInfo] = useState("");
  const [impressionInfo, setImpressionInfo] = useState("");

  /**
   * // TODO:
   * 1. Check if the user has already submitted the answer. If submitted, then set impression and findings value in the fields (done)
   * 2. If the user update the answer then replace the impression and findings value in the fields
   * 3. After submitting the answer go to the next question of the list which will be triggered by the "Next" button
   * 4. Same rules applied if the user click "Previous" button. User should go back to previous question of the list
   * 5. Calculate 3 hours countdown time.
   * 6. If 3 hours passed then user will get a prompt about sumitting answer as his time is up. User can't close the prompt unless submitting the answer
   * 7. User can close the exam any time he wants. Then a prompt will show if the user surely close the answer. Upon clicking "YES" button answers will be submitted
   * and user will be redirected to home page
   */

  useEffect(() => {
    // set timer
    setTimer();

    // get use case information
    setLoading(true);
    BaseAPI.get(`/question/${id}`, {
      headers: { Authorization: `Bearer ${getItem(localStorage, "at")}` },
    })
      .then((res) => {
        setQuestionInformation(res.data.data);
      })
      .catch((err) => {
        if (err?.response?.data?.message) {
          ErrorHandler(err?.response?.data?.message, history);
        } else {
          Notification("Something went wrong! Please try again later", "error");
        }
      })
      .finally(() => setLoading(false));

    // check if the user has already submitted answer
    const submittedAnswerObject = [
      ...JSON.parse(getItem(localStorage, "aa")),
    ].find((el) => el.q_id === +id);

    // set already submitted answer to into the fields
    if (submittedAnswerObject) {
      form.setFieldsValue({
        findings: submittedAnswerObject.findings,
        impression: submittedAnswerObject.impression,
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const setTimer = () => {
    setInterval(() => {
      const distance =
        moment(getItem(localStorage, "et")).valueOf() - moment().valueOf();
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (minutes < 10 && seconds > 9)
        setRemainingTime(`0${hours}:0${minutes}:${seconds}`);
      else if (minutes < 10 && seconds < 9)
        setRemainingTime(`0${hours}:0${minutes}:0${seconds}`);
      else if (seconds < 10)
        setRemainingTime(`0${hours}:${minutes}:0${seconds}`);
      else setRemainingTime(`0${hours}:${minutes}:${seconds}`);

      if (distance < 0) {
        setRemainingTime(`00:00:00`);
      }
    }, 1000);
  };

  const submitAnswer = (values) => {
    const QusSet = JSON.parse(getItem(localStorage, "ql"));
    const currentPos = QusSet.findIndex((el) => el.id === +id);

    form.resetFields();

    if (values === "previous") {
      history.push(`/exam-interface/${QusSet[currentPos - 1].id}`);
    } else {
      const { hpi, json_url, labs, vitals } = questionInformation;

      const answerArray = [...JSON.parse(getItem(localStorage, "aa"))];
      const answerPosition = answerArray.findIndex((el) => el.q_id === +id);

      if (answerPosition === -1) {
        answerArray.push({
          q_id: questionInformation.id,
          hpi,
          json_url,
          labs,
          vitals,
          findings: findingsInfo,
          impression: impressionInfo,
          skill_test_id: +getItem(localStorage, "qi"),
        });
      } else {
        answerArray[answerPosition].findings = findingsInfo;
        answerArray[answerPosition].impression = impressionInfo;
      }

      setItem(localStorage, "aa", JSON.stringify([...answerArray]));
      setFindingsInfo("");
      setImpressionInfo("");

      if (values === "submit") {
        console.log("submit", answerArray);
      } else {
        history.push(`/exam-interface/${QusSet[currentPos + 1].id}`);
      }
    }
  };

  return (
    <ExamLayout>
      <Spin spinning={loading}>
        <Row gutter={[16]} className="mt-2">
          <Col xs={12} style={{ display: "flex", gap: "1em" }}>
            <Text>Total Time Remaining: {remainingTime}</Text>
          </Col>
        </Row>

        <Row className="mt-1">
          <Col xs={24}>
            <Card>
              <ul>
                <li>
                  <Text strong>HPI</Text>: {questionInformation.hpi}
                </li>
                <li>
                  <Text strong>Vitals</Text>: {questionInformation.vitals}
                </li>
                <li>
                  <Text strong>Labs</Text>: {questionInformation.labs}
                </li>
              </ul>
            </Card>

            {questionInformation.json_url && (
              <Row>
                <Col xs={24} className="mt-1">
                  <embed
                    src={questionInformation.json_url}
                    style={{ width: "100%", height: "700px" }}
                  />
                </Col>
              </Row>
            )}

            <Card>
              <Divider orientation="left" className="mt-1">
                Answer Below
              </Divider>
              <Form form={form} layout="vertical">
                <Row gutter={[16]}>
                  <Col xs={24} md={12}>
                    <Form.Item name="findings" label="Findings">
                      <TextArea
                        onChange={(e) => setFindingsInfo(e.target.value)}
                        value={findingsInfo}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} md={12}>
                    <Form.Item name="impression" label="Impression">
                      <TextArea
                        onChange={(e) => setImpressionInfo(e.target.value)}
                        value={impressionInfo}
                      />
                    </Form.Item>
                  </Col>
                </Row>
                {/* <Row justify='center' className='mt-2'>
                  <Button type='primary' htmlType='submit'>
                    Submit Answer
                  </Button>
                </Row> */}
                <Row justify="space-between" className="mt-1">
                  <Button
                    type="dashed"
                    disabled={
                      JSON.parse(getItem(localStorage, "ql"))[0].id === +id
                    }
                    onClick={() => submitAnswer("previous")}
                  >
                    Previous
                  </Button>
                  <Button
                    type="primary"
                    onClick={() =>
                      submitAnswer(
                        JSON.parse(getItem(localStorage, "ql"))[
                          JSON.parse(getItem(localStorage, "ql")).length - 1
                        ].id === +id
                          ? "submit"
                          : "next"
                      )
                    }
                  >
                    {JSON.parse(getItem(localStorage, "ql"))[
                      JSON.parse(getItem(localStorage, "ql")).length - 1
                    ].id === +id
                      ? "Submit"
                      : "Next"}
                  </Button>
                </Row>
              </Form>
            </Card>
          </Col>
        </Row>
      </Spin>
    </ExamLayout>
  );
};

export default ExamPage;
