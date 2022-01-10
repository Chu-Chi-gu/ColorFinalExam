import React from 'react'
import reactCSS from 'reactcss'
import './sketExample.css';
import { SketchPicker } from 'react-color'

class SketchExample extends React.Component {
  state = {
    color: {
      r: '241',
      g: '255',
      b: '255',
      a: '1',
    },
  };

  handleChange = (color) => {
    this.setState({ color: color.rgb })
  };

  render() {
      let r = this.state.color.r;
      let g = this.state.color.g;
      let b = this.state.color.b;
      let a = this.state.color.a;
      let mainStyle = {
        backgroundColor: 'rgba('+r+','+g+','+b+',0.5)',
        height: '580px',
        position: 'relative',
      };
    return (
      <div>
          <div style={mainStyle}>
            <div style={{position: 'relative'}}>
                <div className='textArea'>
                    <div className='title'>
                        Final Exam
                    </div>
                    <div className='content'>
                        拜託讓我過，<br />
                        我真的很需要學分這個酷東西。
                    </div>
                    <div className='sketup'>
                        <div style={{position: 'relative', padding:'50px 0px 0px 0px'}}>
                            <div className='sket'>
                                <SketchPicker
                                 color={ this.state.color } 
                                 onChange={ this.handleChange } 
                                width='300px'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
      </div>
    )
  }
}

export default SketchExample