/* istanbul ignore file */
import { connect } from 'react-redux';

import { settingsUpdated } from '../../actions/settings';
import { getPriceTicker } from '../../actions/liskService';
import Converter from './converter';

const mapStateToProps = state => ({
  settings: state.settings,
  priceTicker: (state.liskService && state.liskService.priceTicker) ?
    state.liskService.priceTicker :
    {
      LSK: {
        USD: '0',
        EUR: '0',
      },
    },
});

const mapDispatchToProps = {
  settingsUpdated,
  getPriceTicker,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Converter);
