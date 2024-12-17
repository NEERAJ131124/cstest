import React from 'react'
import { Card, Col, TabContent, TabPane } from 'reactstrap';
import { useSelector } from 'react-redux';
import DraftTab from './DraftTab';
import TrashTab from './TrashTab';
import WorkTab from './WorkTab';
import PrivateTab from './PrivateTab';
import MailHeader from './MailHeader';
import ComposeModal from './EmailModals/ComposeModal';
import AddLabelModal from './EmailModals/AddLabelModal';
import InboxTab from './InboxTab';
import EmailRead from './EmailRead';
import SentTab from './SentTab';
import StarredTab from './StarredTab';
import { LetterBoxNavContentType } from '../../../../Types/LetterBox.type';
import { RootState } from '../../../../ReduxToolkit/Store';

export default function LetterRightAside({ navId }: LetterBoxNavContentType) {
    const { interviewEmail } = useSelector((state: RootState) => state.email);
    return (
        <Col xxl={9} xl={8} className="box-col-12">
            <div className="email-right-aside">
                <Card className={`email-body email-list ${interviewEmail ? "hide" : "show"}`}>
                    <ComposeModal />
                    <MailHeader />
                    <TabContent activeTab={navId}>
                        <TabPane tabId={"1"}>
                            <InboxTab />
                        </TabPane>
                        <TabPane tabId={"2"}>
                            <SentTab />
                        </TabPane>
                        <TabPane tabId={"3"}>
                            <StarredTab />
                        </TabPane>
                        <TabPane tabId={"4"}>
                            <DraftTab />
                        </TabPane>
                        <TabPane tabId={"5"}>
                            <TrashTab />
                        </TabPane>
                        <TabPane tabId={"6"}>
                            <WorkTab />
                        </TabPane>
                        <TabPane tabId={"7"}>
                            <PrivateTab />
                        </TabPane>
                        <TabPane tabId={"8"}>
                            <PrivateTab />
                        </TabPane>
                        <AddLabelModal />
                    </TabContent>
                </Card>
                <EmailRead />
            </div>
        </Col >
    )
}