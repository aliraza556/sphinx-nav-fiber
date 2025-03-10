import { create } from 'zustand'
import { Node, NodeExtended } from '~/types'

type MindsetStore = {
  clips: NodeExtended[]
  chapters: NodeExtended[] | null
  selectedEpisode: NodeExtended | null
  selectedTweet: NodeExtended | null
  tweetPlayingTime: number
  tweetIsPlaying: boolean
  tweetDuration: number
  setSelectedEpisode: (node: NodeExtended) => void
  setSelectedTweet: (node: NodeExtended) => void
  setClips: (clips: Node[]) => void
  setChapters: (chapters: Node[]) => void
  setTweetPlayingTime: (time: number) => void
  setTweetIsPlaying: (playing: boolean) => void
  setTweetDuration: (duration: number) => void
}

const defaultData: Omit<
  MindsetStore,
  | 'setSelectedEpisode'
  | 'setSelectedTweet'
  | 'setClips'
  | 'setChapters'
  | 'setTweetPlayingTime'
  | 'setTweetIsPlaying'
  | 'setTweetDuration'
> = {
  selectedEpisode: null,
  selectedTweet: null,
  clips: [],
  chapters: [],
  tweetPlayingTime: 0,
  tweetIsPlaying: false,
  tweetDuration: 1,
}

export const useMindsetStore = create<MindsetStore>((set) => ({
  ...defaultData,
  setSelectedEpisode: (selectedEpisode) => set({ selectedEpisode }),
  setSelectedTweet: (selectedTweet) => set({ selectedTweet }),
  setClips: (clips) => set({ clips }),
  setChapters: (chapters) => set({ chapters }),
  setTweetPlayingTime: (time: number) => set({ tweetPlayingTime: time }),
  setTweetIsPlaying: (isPlaying: boolean) => set({ tweetIsPlaying: isPlaying }),
  setTweetDuration: (tweetDuration: number) => set({ tweetDuration }),
}))
