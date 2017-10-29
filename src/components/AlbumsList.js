import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import CoverImage from './CoverImage';

const StyledAlbumsList = styled.section`
    padding-top: 3rem;
    padding-bottom: 3rem;
`;

const Album = styled.div`
`;

const AlbumInfo = styled.div`
  color: #666;
  min-height: 70px;
`;

class AlbumsList extends PureComponent {
	onSave = (album) => () => {
		this.props.onSave(album);
	};

	onDelete = (mbid) => () => {
		this.props.onDelete(mbid);
	};

	render() {
		const { albums, isSaved } = this.props;
		return (
			<StyledAlbumsList>
				<div className="container">
					<div className="row">
						{albums.map((album) => (
							<div className="col-md-3 col-sm-4 col-xs-6">
								<Album className="thumbnail">
									<CoverImage mbid={album.id} />
									<AlbumInfo>
										<div>
											<b>{album.title} </b>({album['artist-credit'].map((credit) => credit.artist.name).join(',')})
										</div>
									</AlbumInfo>
									{isSaved ?
										<button onClick={this.onDelete(album.id)}>Delete</button> :
										<button onClick={this.onSave(album)}>Save</button>
									}
								</Album>
							</div>
						))}
					</div>
				</div>
			</StyledAlbumsList>
		);
	}
}

AlbumsList.defaultProps = {
	albums: [],
	isSaved: false,
	onSave: () => {
	},
	onDelete: () => {
	},
};

AlbumsList.propTypes = {
	onSave: PropTypes.func,
	onDelete: PropTypes.func,
	albums: PropTypes.array,
	isSaved: PropTypes.bool,
};

export default AlbumsList;
