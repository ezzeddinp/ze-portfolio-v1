import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const username = 'ezzeddinp'; // Your GitHub username
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ error: 'GitHub token is not set' });
  }

  try {
    const headers = {
      Authorization: `token ${token}`,
      'User-Agent': 'Your-App-Name'
    };

    const [profileRes, reposRes] = await Promise.all([
      fetch(`https://api.github.com/users/${username}`, { headers }),
      fetch(`https://api.github.com/users/${username}/repos`, { headers })
    ]);

    if (!profileRes.ok || !reposRes.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const profile = await profileRes.json();
    const repositories = await reposRes.json();

    res.status(200).json({ profile, repositories });
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub data' });
  }
}