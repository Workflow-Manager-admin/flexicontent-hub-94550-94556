#!/bin/bash
cd /home/kavia/workspace/code-generation/flexicontent-hub-94550-94556/main_container_for_flexi_content_hub
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

