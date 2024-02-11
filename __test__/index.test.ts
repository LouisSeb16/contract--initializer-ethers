import { JsonRpcProvider, ethers } from 'ethers';
import { ContractInitializer } from '..';

jest.mock('ethers');

describe('ContractInitializer', () => {

    let provider: string;

    let contractAddress: string;

    let contractABI: any;

    let contractInitializer: any;

    beforeEach(() => {

        provider = 'http://localhost:8545';

        contractAddress = '0x123...';

        contractABI = [{
            constant: true,
            inputs: [{ name: 'param1', type: 'uint256' }],
            name: 'getSomeValue',
            outputs: [{ name: '', type: 'uint256' }],
            payable: false,
            stateMutability: 'view',
            type: 'function',
        }];

        const providerMock = new JsonRpcProvider(provider);

        jest.spyOn(ethers, 'JsonRpcProvider').mockReturnValue(providerMock);

        contractInitializer = new ContractInitializer(provider, contractAddress, contractABI);

    });

    it('Should initialize the contract', async () => {

        await contractInitializer.initialize();

        expect(ethers.Contract).toHaveBeenCalledWith(
            contractAddress,
            contractABI,
            expect.any(JsonRpcProvider)
        );

    });

    it('should throw error if contract configurations are not provided', async () => {

        contractInitializer = new ContractInitializer(undefined, undefined, undefined);

        try {

            await contractInitializer.initialize();

        } catch (error: any) {

            expect(error.message).toBe('Contract configurations not provided');

        };

    });

});
