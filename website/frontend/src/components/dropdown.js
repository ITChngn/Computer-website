import React, { Component } from "react";
import "../styles/dropdown.css";

class DropdownButton extends Component {
  container = React.createRef();

  state = {
    open: false,
  };

  handleButtonClick = () => {
    this.setState((state) => ({
      open: !state.open,
    }));
  };

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    return (
      <div ref={this.container} className="container-button">
        <button
          type="button"
          className="button"
          onClick={this.handleButtonClick}
        >
          ☰
        </button>
        {this.state.open && (
          <div className="dropdown">
            <h4 className="title">
              <a href="/">БҮТЭЭГДЭХҮҮНИЙ АНГИЛАЛ</a>
            </h4>
            <div className="middleline"></div>
            <div className="dropdown-container">
              <ul>
                <h5>
                  <a href="/">КОМПЬЮТЕРЫН ХЭРЭГСЭЛ</a>
                </h5>
                <li>
                  <a href="/Category">CPU</a>
                </li>
                <li>
                  <a href="/">Motherboard</a>
                </li>
                <li>
                  <a href="/">Ram</a>
                </li>
                <li>
                  <a href="/">SSD/NVME M2</a>
                </li>
                <li>
                  <a href="/">HDD</a>
                </li>
                <li>
                  <a href="/">Graphic Card</a>
                </li>
                <li>
                  <a href="/">Power Supply</a>
                </li>
                <li>
                  <a href="/">Coolers</a>
                </li>
                <li>
                  <a href="/">Computer Cases</a>
                </li>
              </ul>
              <ul>
                <h5>
                  <a href="/">ДАГАЛДАХ ХЭРЭГСЭЛ</a>
                </h5>
                <li>
                  <a href="/Category">Mouse</a>
                </li>
                <li>
                  <a href="/">Keyboards</a>
                </li>
                <li>
                  <a href="/">Headset</a>
                </li>
                <li>
                  <a href="/">Mouse Pads</a>
                </li>
                <li>
                  <a href="/">Microphone</a>
                </li>
                <li>
                  <a href="/">Web Camera</a>
                </li>
                <li>
                  <a href="/">Speaker</a>
                </li>
              </ul>
              <ul>
                <h5>
                  <a href="/">БУСАД ХЭРЭГСЭЛ</a>
                </h5>
                <li>
                  <a href="/Category">Сандал & Ширээ</a>
                </li>
                <li>
                  <a href="/">Fans</a>
                </li>
                <li>
                  <a href="/">Cable</a>
                </li>
                <li>
                  <a href="/">Network Devices</a>
                </li>
                <li>
                  <a href="/">Figure & Toys</a>
                </li>
                <li>
                  <a href="/">Программ</a>
                </li>
                <li>
                  <a href="/">Бусад</a>
                </li>
              </ul>
              <ul>
                <h5>
                  <a href="/">ДЭЛГЭЦ</a>
                </h5>
                <h5>
                  <a href="/">ПРИНТЕР</a>
                </h5>
                <h5>
                  <a href="/">GAMING КОМПЬЮТЕР</a>
                </h5>
                <h5>
                  <a href="/">OFFICE КОМПЬЮТЕР</a>
                </h5>
                <h5>
                  <a href="/">ЗӨӨВРИЙН КОМПЬЮТЕР</a>
                </h5>
                <h5>
                  <a href="/">PLAYSTATION</a>
                </h5>
              </ul>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default DropdownButton;
