import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components';
import * as actions from '../actions';
import AlbumsList from '../components/AlbumsList';

const StyledSavedAlbumsPage = styled.div``;

class SavedAlbumsPage extends PureComponent {

	componentWillMount() {
		this.props.dispatch(actions.loadAlbums())
	}

	onDeleteAlbum = (mbid) => {
		this.props.dispatch(actions.deleteAlbum(mbid))
	};

	render() {
		const { state: { albums } } = this.props;
		return (
			<StyledSavedAlbumsPage>
				<AlbumsList albums={albums} onDelete={this.onDeleteAlbum} isSaved />
			</StyledSavedAlbumsPage>
		);
	}
}

SavedAlbumsPage.defaultProps = {
	state: {
		albums: [],
	},
};

SavedAlbumsPage.propTypes = {
	dispatch: PropTypes.func.isRequired,
	state: PropTypes.shape({
		albums: PropTypes.array,
	}),
};

const mapStateToProps = state => {
	return {
		state: state.saved,
	}
};

export default connect(mapStateToProps)(SavedAlbumsPage);
