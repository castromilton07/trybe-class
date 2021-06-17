const github = require('./github');

test('função getUserReposUrl', () => {
  const getUserReposUrl = jest.spyOn(github, 'getUserReposUrl');
  const expectedUrl = 'https://api.github.com/users/henriquejensen/repos'

  getUserReposUrl('isaac');

  expect(getUserReposUrl).toHaveBeenCalled();
  expect(getUserReposUrl).toHaveBeenCalledTimes(1);
  expect(getUserReposUrl).toHaveBeenCalledWith('isaac');
  expect(getUserReposUrl('henriquejensen')).toBe(expectedUrl);
  expect(getUserReposUrl).toHaveBeenCalledTimes(2);
});
