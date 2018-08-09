import React from 'react';
import PropTypes from 'prop-types';

class Add extends React.Component {
    state = {
      name: '',
      text: '',
      bigText: '',
      agree: false,
    }
  
    onBtnClickHandler = (e) => {
      e.preventDefault();
      const { name, text, bigText } = this.state;
      //alert(name + '\n' + text);
      this.props.onAddNews({
        id: +new Date(),
        author: name,
        text,
        bigText,
      });
    }
  
    handleChange = (e) => {
      const { id, value } = e.currentTarget
      this.setState({ [id]: value })
    }
  
    handleCheckboxChange = (e) => {
      this.setState({ agree: e.currentTarget.checked })
    }
  
    validate = () => {
      const { name, text, agree } = this.state
      if (name.trim() && text.trim() && agree) {
        return true;
      } else {
        return false;
      }
    }
  
    render() {
      const { name, text, bigText } = this.state
      return (
        <form className='add'>
          <input id='name' type='text' className='add__author' onChange={this.handleChange} placeholder='Ваше имя' value={name} />
          <textarea id='text' className='add__text' onChange={this.handleChange} placeholder='Текст новости' value={text} />
          <textarea id='bigText' className='add__text' onChange={this.handleChange} placeholder='Текст новости подробно' value={bigText} />
          <label className='add__checkrule'>
            <input type='checkbox' onClick={this.handleCheckboxChange} /> Я согласен с правилами
          </label>
          <button className='add__btn' onClick={this.onBtnClickHandler} disabled={!this.validate()}>Добавить новость</button>
        </form>
      )
    }
  }
  
  Add.propTypes = {
    onAddNews: PropTypes.func.isRequired,
  }

  export {Add}