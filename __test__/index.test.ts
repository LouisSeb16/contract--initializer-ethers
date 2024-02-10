import { JsonRpcProvider, Contract, Addressable, FetchRequest, Interface, InterfaceAbi } from 'ethers';
import { ContractInitializer } from '..';

jest.mock('ethers');

describe('ContractInitializer', () => {
    let providerUrl: string;
    let contractAddress: string;
    let contractABI: any;

    beforeEach(() => {
        providerUrl = 'http://localhost:8545';
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
    });

    it('Should initialize the contract', () => {

        const initializeSpy = jest.spyOn(ContractInitializer.prototype, 'initialize');

        const contractInitializer = new ContractInitializer(providerUrl, contractAddress, contractABI);

        expect(initializeSpy).toHaveBeenCalled();

    });

});
