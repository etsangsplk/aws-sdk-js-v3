import { ServiceInputTypes, ServiceOutputTypes, WAFClientResolvedConfig } from "../WAFClient";
import { CreateWebACLMigrationStackRequest, CreateWebACLMigrationStackResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateWebACLMigrationStackCommand,
  serializeAws_json1_1CreateWebACLMigrationStackCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CreateWebACLMigrationStackCommandInput = CreateWebACLMigrationStackRequest;
export type CreateWebACLMigrationStackCommandOutput = CreateWebACLMigrationStackResponse & __MetadataBearer;

export class CreateWebACLMigrationStackCommand extends $Command<
  CreateWebACLMigrationStackCommandInput,
  CreateWebACLMigrationStackCommandOutput,
  WAFClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateWebACLMigrationStackCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: WAFClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateWebACLMigrationStackCommandInput, CreateWebACLMigrationStackCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: CreateWebACLMigrationStackRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateWebACLMigrationStackResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateWebACLMigrationStackCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateWebACLMigrationStackCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateWebACLMigrationStackCommandOutput> {
    return deserializeAws_json1_1CreateWebACLMigrationStackCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
