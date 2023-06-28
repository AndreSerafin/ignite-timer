import { useContext } from 'react'
import ptBR from 'date-fns/locale/pt-BR'
import { HistoryContainer, HistoryList, Status } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { CyclesContext } from '../../contexts/CyclesContext'

export function History() {
  const { cycles } = useContext(CyclesContext)

  function renderCycles() {
    return cycles.map((cycle) => {
      return (
        <tr key={cycle.id}>
          <td>{cycle.task}</td>
          <td>{cycle.minutesAmount} minutos</td>
          <td>
            {formatDistanceToNow(cycle.startDate, {
              addSuffix: true,
              locale: ptBR,
            })}
          </td>
          <td>
            {cycle.finishedDate && (
              <Status statusColor="green">Concluido</Status>
            )}
            {cycle.interruptedDate && (
              <Status statusColor="yellow">Interrompido</Status>
            )}

            {!cycle.finishedDate && !cycle.interruptedDate && (
              <Status statusColor="green">Em andamento</Status>
            )}
          </td>
        </tr>
      )
    })
  }

  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{renderCycles()}</tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
