import * as React from 'react';
import Typography from '@material-ui/core/Typography';

export default class Header extends React.PureComponent {
  constructor (props){
    super(props);
  }
  render(){
    return (
      <div style={{margin: '0.5rem' }}>
        <div style={{ margin: '0 auto', maxWidth: 960, padding: '0.5rem 0.5rem' }}>
          <Typography variant="display1" color="primary">{this.props.siteTitle}</Typography>
        </div>
      </div>
    );
  }
}