import { JsonRpcProvider, ethers } from "ethers";

export class ContractInitializer {

    private provider: JsonRpcProvider;

    private contractAddress: any;

    private contractABI: any;

    private contract: ethers.Contract;

    constructor(providerUrl: string, contractAddress: string, contractABI: any) {

        this.provider = new JsonRpcProvider(providerUrl);

        this.contractAddress = contractAddress;
        
        this.contractABI = contractABI;

        this.initialize();

    };

    private async initialize() {

        if (!this.provider) {

            throw new Error('Contract configurations not provided');

        };

        this.contract = new ethers.Contract(this.contractAddress, this.contractABI, this.provider);

        console.log('[Contract Initialized]', this.contract);

    };
};
