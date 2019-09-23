import {connect} from 'react-redux';
import Home from '../components/Home';
import {fetchDog} from '../actions/dogRequests';

const mapStateToProps = state => ({
  dog: state.dog,
});

const mapDispatchToProps = dispatch => {
  //Retorna um objeto que mapeia um nome a uma função que executa o dispatch de uma ação
  return {
    fetchDog: () => {
      dispatch(fetchDog());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
