import clsx from 'clsx'
import styled from 'styled-components'
import { Divider } from '~/components/common/Divider'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import { useSelectedNode } from '~/stores/useDataStore'

export const Default = () => {
  const selectedNode = useSelectedNode()

  if (!selectedNode) {
    return null
  }

  const hasImage = !!selectedNode.image_url

  const customKeys = selectedNode.properties || {}

  return (
    <StyledContent grow={1} justify="flex-start" pt={hasImage ? 0 : 8} shrink={1}>
      {hasImage ? (
        <StyledImageWrapper>
          <img alt="img_a11y" src={selectedNode.image_url} />
        </StyledImageWrapper>
      ) : null}

      <Flex ml={24} mt={20} style={{ width: 'fit-content' }}>
        <TypeBadge type={selectedNode.type || ''} />
      </Flex>

      <StyledWrapper>
        {Object.entries(customKeys).map(([key, value]) => (
          <NodeDetail key={key} label={key} value={value} />
        ))}
      </StyledWrapper>
    </StyledContent>
  )
}

type Props = { label: string; value: unknown }

const NodeDetail = ({ label, value }: Props) => {
  const isLong = (value as string).length > 140

  return (
    <>
      <StyledDetail className={clsx('node-detail', { 'node-detail__long': isLong })}>
        <Text className="node-detail__label">{label}</Text>
        <Text className="node-detail__value">{value as string}</Text>
      </StyledDetail>
      <StyledDivider />
    </>
  )
}

const StyledContent = styled(Flex)`
  overflow: auto;
  width: 100%;
`

const StyledWrapper = styled(Flex)`
  padding: 4px 24px;
`

const StyledImageWrapper = styled(Flex)`
  width: 100%;
  height: 256px;

  img {
    width: 100%;
    height: 100%;
  }
`

const StyledDetail = styled(Flex)`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-family: Barlow;
  padding: 12px 0;
  font-size: 14px;
  line-height: 22px;

  &.node-detail {
    .node-detail__label {
      min-width: 116px;
      font-weight: 600;
    }

    .node-detail__value {
      font-weight: 400;
    }

    &__long {
      flex-direction: column;
    }
  }
`

const StyledDivider = styled(Divider)`
  margin: auto 0px 2px 0px;
  opacity: 0.75;
`
