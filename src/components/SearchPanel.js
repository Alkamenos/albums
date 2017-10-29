import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledSearchPanel = styled.div`
    padding-top: 6rem;
    padding-bottom: 6rem;
    margin-bottom: 0;
`;

class SearchPanel extends PureComponent {

	onChange = () => {
		const { value } = this.textInput;
		this.props.onChange(value);
	};

	onSubmit = (event) => {
		this.props.onSubmit();
		event.preventDefault();
	};

	render() {
		return (
			<StyledSearchPanel className="jumbotron text-center">
				<div className="container">
					<form className="input-group">
						<input
							type="text"
							className="form-control"
							placeholder="Search for..."
							aria-label="Search for..."
							value={this.props.text}
							onChange={this.onChange}
							ref={(input) => {
								this.textInput = input;
							}}
						/>
						<span className="input-group-btn">
                <button className="btn btn-secondary" type="submit" onClick={this.onSubmit}>Go!</button>
              </span>
					</form>
				</div>
			</StyledSearchPanel>
		);
	}
}

SearchPanel.defaultProps = {
	text: '',
};

SearchPanel.propTypes = {
	onSubmit: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	text: PropTypes.string,
};

export default SearchPanel;
