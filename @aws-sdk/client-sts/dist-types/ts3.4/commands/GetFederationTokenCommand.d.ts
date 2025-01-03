import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import {
  GetFederationTokenRequest,
  GetFederationTokenResponse,
} from "../models/models_0";
import {
  ServiceInputTypes,
  ServiceOutputTypes,
  STSClientResolvedConfig,
} from "../STSClient";
export { __MetadataBearer };
export { $Command };
export interface GetFederationTokenCommandInput
  extends GetFederationTokenRequest {}
export interface GetFederationTokenCommandOutput
  extends GetFederationTokenResponse,
    __MetadataBearer {}
declare const GetFederationTokenCommand_base: {
  new (
    input: GetFederationTokenCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetFederationTokenCommandInput,
    GetFederationTokenCommandOutput,
    STSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  new (
    __0_0: GetFederationTokenCommandInput
  ): import("@smithy/smithy-client").CommandImpl<
    GetFederationTokenCommandInput,
    GetFederationTokenCommandOutput,
    STSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >;
  getEndpointParameterInstructions(): import("@smithy/middleware-endpoint").EndpointParameterInstructions;
};
export declare class GetFederationTokenCommand extends GetFederationTokenCommand_base {
  protected static __types: {
    api: {
      input: GetFederationTokenRequest;
      output: GetFederationTokenResponse;
    };
    sdk: {
      input: GetFederationTokenCommandInput;
      output: GetFederationTokenCommandOutput;
    };
  };
}
