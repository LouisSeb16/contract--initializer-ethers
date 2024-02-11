import { JsonRpcProvider, ethers } from "ethers";

export class ContractInitializer {

    private provider: any;

    private contractAddress: any;

    private contractABI: any;

    private contract: ethers.Contract | undefined;

    constructor(provider: any, contractAddress: any, contractABI: any) {

        this.provider = new JsonRpcProvider(provider);

        this.contractAddress = contractAddress;
        
        this.contractABI = contractABI;

        this.initialize();

    };

    async initialize() {

        if (!this.provider || !this.contractAddress || !this.contractABI) {

            throw new Error('Contract configurations not provided');

        };

        this.contract = new ethers.Contract(this.contractAddress, this.contractABI, this.provider);

        console.log('[Contract Initialized]', this.contract);

    };
};
