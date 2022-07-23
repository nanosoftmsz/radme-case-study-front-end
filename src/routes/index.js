import { Switch, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';

import Dashboard from '../pages/Dashboard';
import ExamPage from '../pages/ExamPage';
import CreateExam from '../pages/Exams/CreateExam';
import ExamAnalysis from '../pages/Exams/ExamAnalysis';
import ExamList from '../pages/Exams/ExamList';
import ExamResult from '../pages/Exams/Result';
import Graphs from '../pages/Graphs';
import Profile from '../pages/Profile';
import Reports from '../pages/Reports';

const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/create-exam' component={CreateExam} />
        <Route exact path='/exam-list' component={ExamList} />
        <Route exact path='/reports' component={Reports} />
        <Route exact path='/exam-list/examresult' component={ExamResult} />
        <Route exact path='/exam-list/examanalysis' component={ExamAnalysis} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/graphs' component={Graphs} />
      </Switch>
    </div>
  );
};

export default AppRoutes;
