export const contractsConfig = {
  CIRCULAR_ECONOMY_ABI: [
    {
      inputs: [
        { internalType: 'address', name: '_resourcesAddress', type: 'address' },
        { internalType: 'address', name: '_buildingsAddress', type: 'address' },
        { internalType: 'address', name: '_equipmentAddress', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'buildingsAddress',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'equipmentAddress',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: 'player', type: 'address' }],
      name: 'getScores',
      outputs: [
        { internalType: 'uint256', name: 'developmentScore', type: 'uint256' },
        {
          internalType: 'uint256',
          name: 'sustainabilityScore',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [{ internalType: 'string', name: '', type: 'string' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'newGame',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [{ internalType: 'address', name: '', type: 'address' }],
      name: 'playerToGame',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'resourcesAddress',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
  ],
  GAME_ABI: [
    {
      inputs: [
        { internalType: 'address', name: 'resourcesAddress', type: 'address' },
        { internalType: 'address', name: 'buildingsAddress', type: 'address' },
        { internalType: 'address', name: 'equipmentAddress', type: 'address' },
        { internalType: 'address', name: '_player', type: 'address' },
      ],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      inputs: [],
      name: 'buildingsContract',
      outputs: [
        { internalType: 'contract Buildings', name: '', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'equipmentContract',
      outputs: [
        { internalType: 'contract Equipment', name: '', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'nextTurn',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [],
      name: 'player',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'resourcesContract',
      outputs: [
        { internalType: 'contract Resources', name: '', type: 'address' },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'turn',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      stateMutability: 'view',
      type: 'function',
    },
  ],
}
