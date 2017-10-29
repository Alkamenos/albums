import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components';
import * as actions from '../actions';
import SearchPanel from '../components/SearchPanel';
import AlbumsList from '../components/AlbumsList';

const StyledSearchPage = styled.div``;

class SearchPage extends PureComponent {

	componentDidMount() {
		this.onSearchSubmit();
	}

	onSearchChange = (text) => {
		this.props.dispatch(actions.searchAlbumsTextUpdate(text))
	};
	onSearchSubmit = () => {
		this.props.dispatch(actions.searchAlbums())
	};

	onSaveAlbum = (album) => {
		this.props.dispatch(actions.saveAlbum(album))
	};

	render() {
		const { state: { albums, text } } = this.props;
		return (
			<StyledSearchPage>
				<SearchPanel onSubmit={this.onSearchSubmit} onChange={this.onSearchChange} text={text} />
				<AlbumsList albums={albums} onSave={this.onSaveAlbum} />
			</StyledSearchPage>
		);
	}
}

SearchPage.defaultProps = {
	state: {
		albums: [],
	},
};

SearchPage.propTypes = {
	dispatch: PropTypes.func.isRequired,
	state: PropTypes.shape({
		albums: PropTypes.array,
	}),
};

const mapStateToProps = state => {
	return {
		state: state.search,
	}
};

export default connect(mapStateToProps)(SearchPage);
