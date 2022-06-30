import React, { useCallback } from 'react'
import styled from 'styled-components'
import { t, Trans } from '@lingui/macro'
import useENS from '../../hooks/useENS'
import { AutoColumn } from '../Column'
import { useActiveWeb3React } from 'hooks'
import { ExternalLink } from 'theme'
import { getEtherscanLink, getEtherscanLinkText } from 'utils'
import { Flex, Text } from 'rebass'
import { ReactComponent as DropdownSVG } from 'assets/svg/down.svg'
import useTheme from 'hooks/useTheme'

const InputPanel = styled.div`
  ${({ theme }) => theme.flexColumnNoWrap}
  position: relative;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.buttonBlack};
  z-index: 1;
  width: 100%;
  transition: max-height 300ms ease-in-out;
  overflow: hidden;
`

const ContainerRow = styled.div<{ error: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.buttonBlack};
  transition: border-color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')},
    color 500ms ${({ error }) => (error ? 'step-end' : 'step-start')};
`

const InputContainer = styled.div`
  flex: 1;
  padding: 0.75rem;
`

const Input = styled.input<{ error?: boolean }>`
  font-size: 14px;
  line-height: 20px;
  outline: none;
  border: none;
  flex: 1 1 auto;
  width: 0;
  background-color: ${({ theme }) => theme.buttonBlack};
  transition: color 300ms ${({ error }) => (error ? 'step-end' : 'step-start')};
  color: ${({ error, theme }) => (error ? theme.red : theme.text)};
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 500;
  width: 100%;
  ::placeholder {
    color: ${({ theme }) => theme.border};
  }
  padding: 0px;
  -webkit-appearance: textfield;

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  ::placeholder {
    color: ${({ theme }) => theme.border};
  }
`

const DropdownIcon = styled(DropdownSVG)<{ open: boolean }>`
  cursor: pointer;
  transition: transform 300ms;
  transform: rotate(${({ open }) => (open ? '-180deg' : 0)});
`

export default function AddressInputPanel({
  id,
  value,
  onChange,
}: {
  id?: string
  // the typed string value
  value: string | null
  // triggers whenever the typed value changes
  onChange: (value: string | null) => void
}) {
  const { chainId } = useActiveWeb3React()
  const { address, loading, name } = useENS(value)

  const handleInput = useCallback(
    event => {
      const input = event.target.value
      const withoutSpaces = input.replace(/\s+/g, '')
      onChange(withoutSpaces)
    },
    [onChange],
  )
  const theme = useTheme()

  const error = Boolean((value || '').length > 0 && !loading && !address)

  return (
    <AutoColumn gap="4px">
      <Flex justifyContent="space-between" alignItems="center" marginTop="4px" color={theme.subText}>
        <Text fontSize="12px" fontWeight="500">
          <Trans>Recipient (Optional)</Trans>

          {address && chainId && (
            <ExternalLink
              href={getEtherscanLink(chainId, name ?? address, 'address')}
              style={{ fontSize: '12px', marginLeft: '4px' }}
            >
              ({getEtherscanLinkText(chainId)})
            </ExternalLink>
          )}
        </Text>
        <DropdownIcon open={value !== null} onClick={() => onChange(value === null ? '' : null)} />
      </Flex>

      <InputPanel id={id} style={{ maxHeight: value === null ? 0 : '44px' }}>
        <ContainerRow error={error}>
          <InputContainer>
            <AutoColumn gap="md">
              <Input
                className="recipient-address-input"
                type="text"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                placeholder={t`Wallet Address or ENS name`}
                error={error}
                pattern="^(0x[a-fA-F0-9]{40})$"
                onChange={handleInput}
                value={value || ''}
              />
            </AutoColumn>
          </InputContainer>
        </ContainerRow>
      </InputPanel>
    </AutoColumn>
  )
}
