import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledCoverImage = styled.div`
    overflow: hidden;
    display: block;
    position: relative;
    padding-bottom: 100%;
    background-color: #eee;
    text-align: center;
`;

const Cover = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src || ''});
    //background-image: url('http://www.theevolvingplanet.com/wp-content/uploads/2016/07/pigs.jpg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

class CoverImage extends PureComponent {

	render() {
		const { mbid } = this.props;
		return (
			<StyledCoverImage className="img-thumbnail">
				No Cover Image
				<Cover src={`http://coverartarchive.org/release-group/${mbid}/front-250.jpg`} />
			</StyledCoverImage>
		);
	}
}

CoverImage.defaultProps = {
	mbid: '',
};

CoverImage.propTypes = {
	mbid: PropTypes.string
};

export default CoverImage;
