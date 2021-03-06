import { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import { getUserPhotosByUsername } from '../../services/firebase';
import Photos from './photos';

export default function Profile({ user }) {
  const reducer = (state, newState) => ({ ...state, ...newState });
  const initalState = {
    profile: {},
    photosCollection: [],
    followerCount: 0
  };
  const [{ profile, photosCollection, followerCount }, dispatch] = useReducer(reducer, initalState);

  useEffect(() => {
    async function getProfileInfoAndPhotos() {
      const photos = await getUserPhotosByUsername(user.username);
      dispatch({ profile: user, photosCollection: photos, followerCount: user.followers.length });
    }

    getProfileInfoAndPhotos();
  }, [user.username]);

  return (
    <>
      <Header
        photosCount={photosCollection ? photosCollection.length : 0}
        profile={profile}
        followerCount={followerCount}
        loggedInusername
        setFollowerCount={dispatch}
      />
      <Photos photos={photosCollection} />
    </>
  );
}

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired,
    followers: PropTypes.array.isRequired,
    following: PropTypes.array.isRequired,
    userId: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    dateCreated: PropTypes.number.isRequired
  })
};
