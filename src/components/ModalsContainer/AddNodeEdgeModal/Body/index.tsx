import { Button, Skeleton } from '@mui/material'
import { useEffect, useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import { Flex } from '~/components/common/Flex'
import { getTopicsData, postEdgeType } from '~/network/fetchSourcesData'
import { useSelectedNode } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { Topic } from '~/types'
import { colors } from '~/utils/colors'
import { TitleEditor } from '../Title'

export type FormData = {
  topic: string
}

export const Body = () => {
  const { close } = useModal('editNodeName')
  const form = useForm<FormData>({ mode: 'onChange' })
  const [loading, setLoading] = useState(false)
  const [selectedType, setSelectedType] = useState('')

  const [topicIsLoading, setTopicIsLoading] = useState(false)
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null)

  const [actualNode, setActualNode] = useState<null | Topic>()

  const selectedNode = useSelectedNode()

  useEffect(() => {
    const init = async () => {
      if (!selectedNode) {
        return
      }

      setTopicIsLoading(true)

      try {
        const { data: topicData } = await getTopicsData({ search: selectedNode?.name })

        const node = topicData.find((i) => i.topic === selectedNode.name)

        setActualNode(node)
      } catch (error) {
        console.log(error)
      } finally {
        setTopicIsLoading(false)
      }
    }

    init()
  }, [selectedNode])

  const closeHandler = () => {
    close()
  }

  const handleSave = async () => {
    if (!selectedTopic || !actualNode) {
      return
    }

    setLoading(true)

    try {
      await postEdgeType({ from: actualNode.ref_id, to: selectedTopic?.ref_id, relationship: selectedType })

      const { ref_id: id } = actualNode
      const { ref_id: selectedId } = selectedTopic

      console.log(id, selectedId)

      //   if (data) {
      //     const newData = { ...data }

      //     newData[id] = { ...newData[id], edgeList: [...newData[id].edgeList, selectedType] }

      //     if (newData[selectedId]) {
      //       newData[selectedId] = { ...newData[selectedId], edgeList: [...newData[selectedId].edgeList, selectedType] }
      //     }

      //     useTopicsStore.setState({ data: newData })

      closeHandler()
    } catch (error) {
      console.warn(error)
    } finally {
      setLoading(false)
    }
  }

  const submitDisabled = loading || !selectedTopic || !selectedType

  return (
    <FormProvider {...form}>
      {topicIsLoading ? (
        <Flex my={24}>
          <Skeleton />
        </Flex>
      ) : (
        <TitleEditor
          from={actualNode ? actualNode.topic : ''}
          onSelect={setSelectedTopic}
          selectedTopic={selectedTopic}
          selectedType={selectedType}
          setSelectedType={setSelectedType}
        />
      )}
      <Button color="secondary" disabled={submitDisabled} onClick={handleSave} size="large" variant="contained">
        Confirm
        {loading && <ClipLoader color={colors.BLUE_PRESS_STATE} size={10} />}
      </Button>
    </FormProvider>
  )
}