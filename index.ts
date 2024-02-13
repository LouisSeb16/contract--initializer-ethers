import { JsonRpcProvider, ethers } from "ethers";

export class ContractInitializer {

    private provider: any;

    private contractAddress: any;

    private contractABI: any;

    private contract: ethers.Contract | undefined;

    constructor(contractConfig: any) {

        const { provider, contractAddress, contractABI } = contractConfig;

        if (contractConfig) {

            this.provider = new JsonRpcProvider(provider);

            this.contractAddress = contractAddress;

            this.contractABI = contractABI;

            this.initialize();

        };

    };

    async initialize() {

        try {

            if (!this.provider || !this.contractAddress || !this.contractABI) {

                throw new Error('Contract configurations not provided');

            };

            this.contract = new ethers.Contract(this.contractAddress, this.contractABI, this.provider);

            console.log('[Contract Initialized]', this.contract);

        } catch (e) {

            console.log(e);

        };

    };
};
