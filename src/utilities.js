import { paramCase } from 'change-case';

export const getArtistPath = (name) => name && `/artists/${paramCase(name)}`

export const getReleasePath = (title) => title && `/releases/${paramCase(title)}`
