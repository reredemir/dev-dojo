import { connect } from 'react-redux';
import MentorForm from 'src/components/Utils/MentorForm';
import {
  addMentor,
  editMentor,
  proposalMentor,
  changeValue,
  mentorSuccess,
  initialValueMentor,
} from 'src/actions/mentors';

const mapStateToProps = (state) => ({
  datas: state.datas.datas,
  id: state.mentor.id,
  name: state.mentor.name,
  description: state.mentor.description,
  role: state.mentor.role,
  image: state.mentor.image,
  github: state.mentor.github,
  linkedin: state.mentor.linkedin,
  twitch: state.mentor.twitch,
  twitter: state.mentor.twitter,
  website: state.mentor.website,
  youtube: state.mentor.youtube,
  technologies: state.mentor.technologies,
});

const mapDispatchToProps = (dispatch) => ({
  initialValue: (value) => {
    dispatch(initialValueMentor(value));
  },

  changeValue: (value, key) => {
    dispatch(changeValue(value, key));
  },

  resetInitial: () => {
    dispatch(mentorSuccess());
  },

  handleAddSubmit: () => {
    dispatch(addMentor());
  },

  handleEditSubmit: () => {
    dispatch(editMentor());
  },

  handleProposalSubmit: () => {
    dispatch(proposalMentor());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MentorForm);
